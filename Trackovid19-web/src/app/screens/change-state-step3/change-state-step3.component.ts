import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfinementStateService } from 'src/app/states/confinement-state/state/confinement-state.service';
import { ConfinementState } from 'src/app/states/confinement-state/state/confinement-state.model';
import { Step } from 'src/app/shared/steps/steps.component';

@Component({
  selector: 'app-change-state-step3',
  templateUrl: './change-state-step3.component.html',
  styleUrls: ['./change-state-step3.component.scss'],
})
export class ChangeStateStep3Component implements OnInit {
  confinementStates: ConfinementState[];
  steps: Step[] = [
    { label: '1', url: 'change-state-step1', active: true },
    { label: '2', url: 'change-state-step2', active: true },
    { label: '3', url: 'change-state-step3', active: true },
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confinementStateService: ConfinementStateService,
  ) {}

  ngOnInit(): void {
    this.confinementStateService.get().subscribe(confinementStates => {
      this.confinementStates = confinementStates;
    });
  }

  sendForm() {
    this.router.navigate(['/dashboard', { outlets: { dash: ['status'] } }], {
      relativeTo: this.activatedRoute,
    });
  }
}
