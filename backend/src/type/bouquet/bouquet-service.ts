import type { BouquetRequest, BouquetResponse} from "../model"


export type BouquetServiceType = {
    findAll(): Promise<BouquetResponse[]>
    findById(BouquetId:number|string): Promise<BouquetResponse>
    insert(BouquetRequest:BouquetRequest): Promise<void>
    update(BouquetId: number|string, BouquetRequest: BouquetRequest): Promise<void>
} 