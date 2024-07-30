// src/app/models/utilisateur.model.ts

export interface Utilisateur {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  motDePasse: string;
  role: Role;  // Le rôle est lié ici
}
export interface Organisateur extends Utilisateur {
  id?: number;
}





export interface Role {
  id: number;
  role: string; // Nom du rôle, par exemple "Admin", "Client", etc.
}


export interface Reservation {
  id: number;
  date_res:Date;
  category: Categorie_Billet;
  evenement:Evenement;
  methodePaiement:Methode_paiement;
  statut:statut_reservation ;
  utilisateur:Utilisateur;
}

export interface statut_reservation {
  id: number;
  statut: string
}

export interface Evenement{
  id?: number;
  date: Date,
  datedebut: Date,
  datefin: Date,
  description: string,
  nom: string,
  nombre_place:number,
  categories_id:Categorie_event,
  type_event_id:Type_event,
  users_id:Utilisateur,
}

export interface Methode_paiement {
  id: number;
  methodepaie: string
}
    
export interface Categorie_event{
  id: number;
  category: string
}
   
export interface Type_event{
  id: number;
  type: string
}
export interface Categorie_Billet{
  id: number;
  category: string
}
// Prestateur et equipement 
export interface Equipement {
  id: number;
  nom: string;
  description: string;
  presta: Prestateur;  // Supposez que Prestateur est un autre modèle TypeScript défini séparément
}

export interface Prestateur {
  id: number;
  nom_presta:string;
  email:string;
  tel:number;
  profile:number;
  organisateur:Organisateur;
  rolePrestateur:RolePrestateur;
}

export interface RolePrestateur {
  id: number;
  role:string;
}

export interface Lieu {
  id: number;
  nom:string;
  adresse:string;
  salle:string;
  capacite:number;
}
export interface Taches {
  Id: number;
  Title:string;
  priority:PriorityTask;
  evenement:Evenement;
  utilisateur:Utilisateur;
}
export interface PriorityTask {
  Id: number;
  priority:string;
}

