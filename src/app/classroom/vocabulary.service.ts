import { Injectable } from "@angular/core";
import { VocabularyTerm } from "./vocabulary-term.model";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { AuthService } from "../auth.service";


@Injectable()
export class VocabularyService {

    GET_VOCABLE_URL: string = 'http://127.0.0.1:5000/get_vocab'

    constructor(private http: HttpClient, private authService: AuthService){}
    
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

    getVocableFromBackend(): VocabularyTerm {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            observe: 'response' as 'body',
            withCredentials: true,
        }
        this.http.get(this.GET_VOCABLE_URL, httpOptions)
            .subscribe( (res: HttpResponse<any>) => {
                if(res.status == 200) {
                    console.log(res);
                    return null
                }
            }, (error) => {
                console.log(error.message);
            })
            return null
    }

}

