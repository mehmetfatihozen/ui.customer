import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  constructor(private router: Router) {
  }

  convertBase64ToFile = (base64String, fileName, mimeType) => {
    let bstr = atob(base64String);
    let n = bstr.length;
    let uint8Array = new Uint8Array(n);
    while (n--) {
      uint8Array[n] = bstr.charCodeAt(n);
    }
    return new File([uint8Array], fileName, {type: mimeType});
  }

  redirectTo(url: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => this.router.navigate([url]));
  }
}
