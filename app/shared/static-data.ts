export namespace DateFunctions {
    // Convert a Date to String in the right format to put into Database (SQLite)
    // Date string output: YYYY-MM-DD
    export function toDBDate(fromDate: Date): string {
        return fromDate.getFullYear() + '-' +
            ('0' + (fromDate.getMonth() + 1)).substr(-2, 2) + '-' +
            ('0' + fromDate.getDate()).substr(-2, 2);
    }

    // Reads a string in the format YYYY-MM-DD and returns a Date type
    export function parseDBDate(dateString: string): Date {
        return new Date(
            Number.parseInt(dateString.substr(0, 4)),
            (Number.parseInt(dateString.substr(5, 2)) - 1),
            Number.parseInt(dateString.substr(8, 2)));
    }
}

export enum QuizTypeEnum {
    FlashCard = 0,
}

export enum CurrentScreenEnum {
    CardsList = 0,
    PlayQuiz = 1,
    EditCard = 2,
    QuizList = 3,
    EditQuiz = 4,
}

/*
 * DATABASE CONSTANTS
 */
export const CardTable = Object.freeze({
    ID: 'id',
    FRONT_TEXT: 'front_text',
    BACK_TEXT: 'back_text'
});

export const QuizTable = Object.freeze({
    ID: 'id',
    TITLE: 'title'
});

export const QuizItemTable = Object.freeze({
    ID: 'id',
    QUIZ_ID: 'quiz_id',
    ITEM_TYPE: 'item_type',
    ITEM_ID: 'item_id'
});
export const QuizItemType = Object.freeze({
    CARD: 'card'
});
