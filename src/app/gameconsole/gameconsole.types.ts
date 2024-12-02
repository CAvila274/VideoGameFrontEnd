
export interface GameConsole {
  id: number;
  name: string | null;
  releaseDate: Date;
  companyId: number;
  isChecked: boolean;
  consoleType: string;
}

// private variable = [{ Id: 0, Name: '', ReleaseDate: '', CompanyId: 0}, { Id: 1, Name: '', ReleaseDate: '', CompanyId: 0}, { Id: 2, Name: '', ReleaseDate: '', CompanyId: 0}]
