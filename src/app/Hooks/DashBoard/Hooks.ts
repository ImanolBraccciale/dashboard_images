//aqui se guardan hooks en este orden variables, interfaces,algún objeto de prueba


export const testEmail = "test@example.com";
export const testPassword = "1234";

export interface LoadingStateProps {
  showError: boolean;
}
export interface UploadImageModalProps  {
  isOpen: boolean;
  onRequestClose: () => void;
  onUploadSuccess: (results: any) => void; // Callback para pasar los resultados al componente principal
}

export interface EditResultModalProps {
  result: ResultItem;
  isOpen: boolean;
  onRequestClose: () => void;
  onUpdate: (updatedResult: ResultItem) => void;
 }

export interface CaseSummaryProps {
  result: ResultItem | undefined;
}
export interface QuickActionsProps {
  onOpenModal: () => void;
}

export interface SidebarProps {
  onItemSelect: (item: string) => void;
}

export interface ResultItemCardProps {
  result: ResultItem;
  onEditClick: (result: ResultItem) => void;
  onHideClick: (id: string) => void;
}

export interface ResultsSummaryProps {
  visible?:boolean
  results: ResultItem[];
  loading?:boolean;
 }
 export interface ImageMagnifierProps {
  src: string;
  alt?: string;
}

export interface ResultItem {
  id: string;
  IA_Type: string;
  IATotalCells: number;
  IAPositiveCells: number;
  IANegativeCells: number;
  TotalCells: number;
  PositiveCells: number;
  NegativeCells: number;
  WrongTotalCells: number;
  WrongPositiveCells: number;
  WrongNegativeCells: number;
  originalImageUrl: string;
  processedImageUrl: string;
  visible: boolean;
}

 
export const uniqueResult:ResultItem =  {
  id: "1",
  IA_Type: "KI67",
  IATotalCells: 10300,
  IAPositiveCells: 300,
  IANegativeCells: 700,
  TotalCells: 1200,
  PositiveCells: 350,
  NegativeCells: 850,
  WrongTotalCells: 50,
  WrongPositiveCells: 25,
  WrongNegativeCells: 25,
  originalImageUrl: "/ImgA.png",
  processedImageUrl: "/ImgA.png",
  visible: true,
}

 