// Statics
import { QuizTypeEnum } from '../shared/static-data';

export declare namespace FishMemoryDomain {

    /*
     * Represents a flash card
     */
    interface FMCard {
        id?: number,
        frontText: string,
        backText: string,
    }

    /*
     * Represents a quiz
     */
    interface FMQuiz {
        id?: number,
        title: string,
        cards: FMCard[]
    }

    /*
     * Filter options for lists
     */
    interface FMFilterOptions {
        without?: any,
        within?: any,
        order?: any,
        orderDirection?: any
    }

    /*
     * Represents an item in the list of quizzes
     */
    interface FMQuizListItem {
        id?: number,
        title: string,
        cardIds: number[]
    }

    /*
     * Represents a statistic data 
     */
    interface FMStatistic {
        quizType: QuizTypeEnum,
        startDate: Date,
        finishDate?: Date,
        totalQuestions: number,
        totalRight: number,
        totalWrong: number,
        score: number
    }
}