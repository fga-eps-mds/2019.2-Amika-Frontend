import {Component} from '@angular/core';

@Component({
  selector: 'app-area-informativa',
  templateUrl: './area-informativa.component.html',
  styleUrls: ['./area-informativa.component.css']
})
export class AreaInformativaComponent {
  atendentes = [
    {
      local: "Centro de Atendimento e Estudos Psicológicos da UnB",
      telefones: ["(61) 3107-1680"]
    },
    {
      local: "Clínica de Psicologia UNICEUB",
      telefones: ["(61) 3966-1625", "(61) 3966-1626", "(61) 3966-1627"]
    },
    {
      local: "Clínica de Psicologia UNIP",
      telefones: ["(61) 2192-7092"]
    },
    {
      local: "Instituto São Paulo de Análise do Comportamento",
      telefones: ["(61) 3425-2717", "(61) 3327-7338"]
    },
    {
      local: "Clínica Social de Taguatinga",
      telefones: ["(61) 3967-3060"]
    },
    {
      local: "Clínica de Psicologia IESB",
      telefones: ["(61) 3445-4502", "(61) 3445-4503"]
    },
    {
      local: "Clínica de Psicologia UDF",
      telefones: ["(61) 3225-7724", "(61) 9 9983-7555"]
    },
    {
      local: "Instituto Brasiliense de Análise do Comportamento",
      telefones: ["(61) 3242-5250"]
    },
    {
      local: "Centro de Psicologia Humanista de Brasília",
      telefones: ["(61) 3340-9004"]
    },
    {
      local: "Terapeutas Sem Fronteiras",
      telefones: ["(61) 3522-4447", "(61) 9 8260-8003"]
    },
    {
      local: "Associação Brasileira de Psicodrama",
      telefones: ["(61) 3245-6390", "(61) 3346-6832"]
    },
    {
      local: "Clínica de Psicologia UCB",
      telefones: ["(61) 3356-9328", "(61) 3356-9000"]
    },
    {
      local: "ITGB",
      telefones: ["(61) 3965-5731", "(61) 3274-0061", "(61) 9 9967-7569"]
    },
    {
      local: "Centro de Orientação Médico Psicopedagógico",
      telefones: ["(61) 33255-4995", "(61) 3326-3346"]
    },
    {
      local: "IBNeuro",
      telefones: ["(61) 3226-3002", "(61) 3225-9185"]
    },
    {
      local: "Clínica Social INTERPSI",
      telefones: ["(61) 9 8118-0548", "(61) 9 9982-3224"]
    }
  ]
}
