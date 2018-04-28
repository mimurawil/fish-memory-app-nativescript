import { Injectable } from '@angular/core';

// SQLite
let SQLite = require('nativescript-sqlite');

// Statics & Domains
import { CardTable, QuizTable, QuizItemTable, QuizItemType } from '../shared/static-data';
import { FishMemoryDomain } from '../typing/domains';
import FMCard = FishMemoryDomain.FMCard;
import FMQuiz = FishMemoryDomain.FMQuiz;

@Injectable()
export class FMDatabaseService {

    private _db: any;
    private DBNAME = 'FishMemoryDB.db';

    private CARD_TABLE = 'card_table';
    private QUIZ_TABLE = 'quiz_table';
    private QUIZ_ITEM_TABLE = 'quiz_item_table';

    constructor() {
        // SQLite.copyDatabase(this.DBNAME);
        if (!SQLite.exists(this.DBNAME)) {
            SQLite.copyDatabase(this.DBNAME);
        }
        new SQLite(this.DBNAME, (err, db) => {
            if (!err) {
                this._db = db;
                this._db.resultType(SQLite.RESULTSASOBJECT);
            }
        });
    }

    // Lists card_table
    public getAllCards(): Promise<any> {
        const sql: string =
            `SELECT ${CardTable.ID}, ${CardTable.FRONT_TEXT}, ${CardTable.BACK_TEXT}
               FROM ${this.CARD_TABLE}`;
        return this._db.all(sql);
    }

    // Inserts card_table. Returns id
    public insertNewCard(card: FMCard): Promise<number> {
        const sql: string =
            `INSERT INTO ${this.CARD_TABLE}
                        (${CardTable.FRONT_TEXT}
                        ,${CardTable.BACK_TEXT})
                    VALUES (?
                           ,?)`;
        return this._db.execSQL(sql, [card.frontText, card.backText]);
    }

    // Updates card_table. Returns quantity of updated row(s)
    public updateCard(card: FMCard): Promise<number> {
        const sql: string =
            `UPDATE ${this.CARD_TABLE} 
                SET ${CardTable.FRONT_TEXT} = ?
                   ,${CardTable.BACK_TEXT} = ?
              WHERE ${CardTable.ID} = ?`;
        return this._db.execSQL(sql, [card.frontText, card.backText, card.id]);
    }

    // Deletes card_table. Returns quantity of deleted row(s)
    public deleteCard(id: number): Promise<number> {
        const sql: string =
            `DELETE FROM ${this.CARD_TABLE} WHERE ${CardTable.ID} = ?`;
        return this._db.execSQL(sql, [id]);
    }

    // Lists quiz_table
    public getAllQuizzesWithItems(): Promise<any> {
        const sql: string =
            `SELECT qt.${QuizTable.ID}
                      , qt.${QuizTable.TITLE}
                      , qit.${QuizItemTable.ITEM_TYPE}
                      , qit.${QuizItemTable.ITEM_ID}
                   FROM ${this.QUIZ_TABLE} qt
                  INNER JOIN ${this.QUIZ_ITEM_TABLE} qit ON (qt.${QuizTable.ID} = qit.${QuizItemTable.QUIZ_ID})`;
        return this._db.all(sql);
    }

    // Inserts quiz_table. Returns id
    public insertNewQuiz(quiz: FMQuiz): Promise<any> {
        return new Promise((resolve, reject) => {
            const sqlQuiz: string =
                `INSERT INTO ${this.QUIZ_TABLE} (${QuizTable.TITLE})
                        VALUES (?)`;
            this._db.execSQL(sqlQuiz, [quiz.title]).then(
                id => {
                    quiz.id = id;
                    this.insertNewQuizItem(quiz).then(result => {
                        resolve(id);
                    }, err => { reject(err); });
                },
                err => { reject(err); }
            );
        });
    }

    // Inserts multiple quiz_item_table. Returns array of ids
    public insertNewQuizItem(quiz: FMQuiz): Promise<any> {
        if (quiz.cards.length < 1) {
            return Promise.resolve([]);
        }
        let sqlQuizItem: string =
            `INSERT INTO ${this.QUIZ_ITEM_TABLE} 
                        (${QuizItemTable.QUIZ_ID}
                        , ${QuizItemTable.ITEM_TYPE}
                        , ${QuizItemTable.ITEM_ID})
                    VALUES `;
        quiz.cards.forEach(card => {
            sqlQuizItem += `(${quiz.id}, "${QuizItemType.CARD}", ${card.id}),`;
        });
        sqlQuizItem = sqlQuizItem.slice(0, -1);
        return this._db.execSQL(sqlQuizItem);
    }

    // Updates title of quiz_table. Returns quantity of updated row(s) (just 1 if success)
    public updateQuiz(id: number, title: string): Promise<any> {
        let sql: string =
            `UPDATE ${this.QUIZ_TABLE}
                SET ${QuizTable.TITLE} = ?
              WHERE ${QuizTable.ID} = ?`;
        return this._db.execSQL(sql, title, id);
    }

    // Deletes quiz_table. Returns quantity of deleted row(s)
    public deleteQuiz(id: number): Promise<any> {
        const sql: string =
            `DELETE FROM ${this.QUIZ_TABLE} WHERE ${QuizTable.ID} = ?`;
        return this._db.execSQL(sql, [id]);
    }

    // Deletes quiz_item_table by quiz_id. Returns quantity of deleted row(s)
    public deleteQuizItemByQuizId(quizId: number): Promise<any> {
        const sql: string =
            `DELETE FROM ${this.QUIZ_ITEM_TABLE} WHERE ${QuizItemTable.QUIZ_ID} = ?`;
        return this._db.execSQL(sql, [quizId]);
    }
}