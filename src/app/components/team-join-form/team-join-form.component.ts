import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team-join-form',
  templateUrl: './team-join-form.component.html',
  styleUrls: ['./team-join-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TeamJoinFormComponent {
  answer = '';
  result = '';
  showResult = false;
  successMessage = "Você está mais próximo de se juntar ao time!";
  errorMessage =  `Erro! Só aceitamos "SIM" como resposta.`;

  constructor(private http: HttpClient) {}

  confirm() {
    let apiEndpoint = 'https://6421bc3386992901b2baf3b0.mockapi.io/answer?message=';
    
    if (this.answer.toLowerCase() === 'sim') {
      apiEndpoint += 'success';
    } else {
      apiEndpoint += 'error';
    }

    this.answer = '';    
    
    this.http.get<any>(apiEndpoint)
      .subscribe(response => {
        this.result = response[0].message;
        this.showResult = true;
      });

    setTimeout(() => {
      this.showResult = false;
    }, 4000);
  }  
}
