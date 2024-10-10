export interface Questions {
    questionTitle:          string;
    questionType:           string;
    multipleChoices?:       string[];
    multipleCorrectAnswer?: number;
    dragSentences?:         string[];
    dragChoices?:           string[];
    dragCorrectAnswer?:     string[];
}
