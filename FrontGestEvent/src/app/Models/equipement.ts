export interface Equipement {
  id: number;
  nom: string;
  description: string;
  prestateur: Prestateur;  // Supposez que Prestateur est un autre modèle TypeScript défini séparément
}

export interface Prestateur {
  id: number;
  nom: string;
}
