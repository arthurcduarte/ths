// Gerado por OS/6_Combate/gerar.py a partir de OS/7_Base. Não editar à mão.
window.BANCO = {
 "armas": [
  {
   "id": "p45",
   "nome": ".45",
   "sub": "pistola",
   "tipo": "pistola",
   "base": 15,
   "dano": "1D10+1",
   "municao": 7,
   "defeito": 100,
   "frequente": true,
   "fonte": "LG 402 (1D10+2 no livro; 1D10+1 é regra da mesa, 25/11/2026)"
  },
  {
   "id": "p38",
   "nome": ".38",
   "sub": "pistola",
   "tipo": "pistola",
   "base": 15,
   "dano": "1D10",
   "municao": 8,
   "defeito": 99,
   "frequente": true,
   "fonte": "LG 402"
  },
  {
   "id": "p32",
   "nome": ".32",
   "sub": "pistola",
   "tipo": "pistola",
   "base": 15,
   "dano": "1D8",
   "municao": 8,
   "defeito": 99,
   "frequente": true,
   "fonte": "LG 402"
  },
  {
   "id": "r45",
   "nome": "Revólver .45",
   "sub": "pistola",
   "tipo": "pistola",
   "base": 15,
   "dano": "1D10+1",
   "municao": 6,
   "defeito": 100,
   "frequente": false,
   "fonte": "LG 402 (1D10+2 no livro; 1D10+1 é regra da mesa, 25/11/2026)"
  },
  {
   "id": "r38",
   "nome": "Revólver .38",
   "sub": "pistola",
   "tipo": "pistola",
   "base": 15,
   "dano": "1D10",
   "municao": 6,
   "defeito": 100,
   "frequente": false,
   "fonte": "LG 402"
  },
  {
   "id": "r32",
   "nome": "Revólver .32",
   "sub": "pistola",
   "tipo": "pistola",
   "base": 15,
   "dano": "1D8",
   "municao": 6,
   "defeito": 100,
   "frequente": false,
   "fonte": "LG 402"
  },
  {
   "id": "tho",
   "nome": "Thompson",
   "sub": "submetralhadora",
   "tipo": "auto",
   "base": 20,
   "dano": "1D10+1",
   "municao": 20,
   "defeito": 96,
   "frequente": true,
   "fonte": "LG 404 (1D10+2 no livro; 1D10+1 é regra da mesa, 25/11/2026)"
  },
  {
   "id": "e12",
   "nome": "Calibre 12",
   "sub": "espingarda",
   "tipo": "espingarda",
   "faixas": [
    10,
    20,
    50
   ],
   "danos": [
    "4D6",
    "2D6",
    "1D6"
   ],
   "municao": 2,
   "defeito": 100,
   "longa": true,
   "frequente": true,
   "fonte": "LG 403"
  },
  {
   "id": "p22",
   "nome": ".22 curta",
   "sub": "pistola",
   "tipo": "pistola",
   "base": 10,
   "dano": "1D6",
   "municao": 6,
   "defeito": 100,
   "frequente": false,
   "fonte": "LG 402"
  },
  {
   "id": "ser",
   "nome": "Calibre 12 serrada",
   "sub": "espingarda",
   "tipo": "espingarda",
   "faixas": [
    5,
    10
   ],
   "danos": [
    "4D6",
    "1D6"
   ],
   "municao": 2,
   "defeito": 100,
   "frequente": false,
   "fonte": "LG 403"
  },
  {
   "id": "rif",
   "nome": "Rifle .30-06",
   "sub": "rifle",
   "tipo": "rifle",
   "base": 110,
   "dano": "2D6+4",
   "municao": 5,
   "defeito": 100,
   "longa": true,
   "frequente": false,
   "fonte": "LG 403"
  },
  {
   "id": "r303",
   "nome": "Rifle .303",
   "sub": "rifle (Lee-Enfield)",
   "tipo": "rifle",
   "base": 110,
   "dano": "2D6+4",
   "municao": 10,
   "defeito": 100,
   "longa": true,
   "frequente": false,
   "fonte": "LG 403"
  }
 ],
 "personagens": [
  {
   "id": "ahmet-saad",
   "nome": "Ahmet Saad",
   "grupo": "pj",
   "des": 55,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 39
   },
   "armas": [
    "r45"
   ],
   "talentos": [],
   "lutar": null,
   "esquivar": 33,
   "fonte": "ficha.yaml do PJ",
   "mente_tal": [
    "resiliente"
   ],
   "pv": 21,
   "san": 59,
   "int": 65,
   "sorte": 33,
   "mythos": 38,
   "jogador": "Rodrigo",
   "nota": "Conhecimento do Mythos. Resiliente. Armadura 1."
  },
  {
   "id": "chris-odonnel",
   "nome": "Chris O'Donnel",
   "grupo": "pj",
   "des": 50,
   "corpo": 2,
   "dano_extra": "1D6",
   "pericias": {
    "pistola": 62,
    "espingarda": 30,
    "rifle": 30
   },
   "armas": [
    "r38"
   ],
   "talentos": [],
   "lutar": 94,
   "esquivar": 89,
   "fonte": "ficha.yaml do PJ",
   "mente_tal": [
    "calejado"
   ],
   "pv": 34,
   "san": 60,
   "int": 50,
   "sorte": 33,
   "mythos": 3,
   "jogador": "Bruno",
   "nota": "Calejado. Golpes Fortes. Armadura 1."
  },
  {
   "id": "frei-raul",
   "nome": "Frei Raul",
   "grupo": "pj",
   "des": 60,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": null,
   "esquivar": 33,
   "fonte": "ficha.yaml do PJ",
   "pv": 22,
   "telecinese": 81,
   "arremessar": 80,
   "san": 77,
   "int": 80,
   "sorte": 65,
   "mythos": 24,
   "jogador": "Tadeu",
   "nota": "Poder Psíquico. Voluntarioso."
  },
  {
   "id": "javier-zapata",
   "nome": "Javier Zapata",
   "grupo": "pj",
   "des": null,
   "corpo": null,
   "dano_extra": null,
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": null,
   "esquivar": null,
   "fonte": "OS/2_Personagens/pjs.md",
   "jogador": "Lucas",
   "nota": "Sombra: dois ataques surpresa se não for visto."
  },
  {
   "id": "richard-hawkes",
   "nome": "Richard Hawkes",
   "grupo": "pj",
   "des": 95,
   "corpo": 1,
   "dano_extra": "1D4",
   "pericias": {
    "pistola": 97,
    "espingarda": 40,
    "rifle": 40
   },
   "armas": [
    "p45",
    "p45"
   ],
   "talentos": [
    "rapido"
   ],
   "lutar": 95,
   "esquivar": 80,
   "fonte": "ficha.yaml do PJ",
   "mente_tal": [
    "calejado"
   ],
   "pv": 30,
   "arremessar": 40,
   "tiros": 3,
   "san": 37,
   "int": 50,
   "sorte": 20,
   "mythos": 8,
   "duas_armas": true,
   "jogador": "Matheus",
   "nota": "Calejado. Armadura 1."
  },
  {
   "id": "vincent-moretti",
   "nome": "Vincent Moretti",
   "grupo": "pj",
   "des": 70,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 40
   },
   "armas": [
    "r32"
   ],
   "talentos": [],
   "lutar": null,
   "esquivar": 60,
   "fonte": "ficha.yaml do PJ",
   "pv": 19,
   "arremessar": 55,
   "san": 65,
   "int": 90,
   "sorte": 51,
   "jogador": "Luiz",
   "nota": "Sagaz. Engenhoso."
  }
 ]
};
