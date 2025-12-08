 
  export interface IUser{ 
 
  UserId: number;
  UserName: string;
  Password: string;
  Role?: number | null;
  CreatedBy?: number | null;
  CreatedOn?: Date | null;
  UpdatedBy?: number | null;
  UpdatedOn?: Date | null;

  }