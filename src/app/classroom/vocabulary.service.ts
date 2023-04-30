import { Injectable } from "@angular/core";
import { VocabularyTerm } from "./vocabulary-term.model";


@Injectable()
export class VocabularyService {

    
    private vocabulary: VocabularyTerm[] = [
        {deutsch: "das Haus", spanisch: "la casa"},
        {deutsch: "der Mann", spanisch: "el hombre"},
        {deutsch: "die Frau", spanisch: "la mujer"},
        {deutsch: "das Kind", spanisch: "el niño"},
        {deutsch: "der Garten", spanisch: "el jardin"},
        
    ]

    getVocabulary(): VocabularyTerm[] {
        return this.vocabulary.slice()
    }

}

