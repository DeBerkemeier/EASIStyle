import { MatIconRegistry } from '@angular/material/icon';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // Custom Icon Registry
    this.matIconRegistry.addSvgIcon(
      'ToolboxIcon_orange',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/ToolboxIcon_orange.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'toolboxIcon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/toolbox-meeting.svg'
      )
    );

      this.matIconRegistry.addSvgIcon(
        'warning',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/warning.svg')
      );

      this.matIconRegistry.addSvgIcon(
        'riskIcon',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Gefährdungsbeurteilung Icon medium')
      );
    this.matIconRegistry.addSvgIcon(
      'intructionsicon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/instruction.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'riskIcon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Gefährdungsbeurteilung Icon medium'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'qualificationsIcon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/student-hat.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'medicalCheckupIcon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/medical-checkup.svg'
      )
    );
  }
}
