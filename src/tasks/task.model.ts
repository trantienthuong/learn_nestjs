//tạo ra các interface hoặc các emum
export interface Task {
  id: string,
  title: string,
  description :string,
  status : TaskStatus
}


//đọc thêm về enum
export enum TaskStatus {
  OPEN ='OPEN',
  IN_PROGRESS ='IN_PROGESS',
  DONE ='DONE'
}