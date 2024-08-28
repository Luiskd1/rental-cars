export type FiltersCarsProps = {
    setFilters: (filterName:string, filterValue:string) => void;
    clearFilters: () => void;
    filters:{
        type: string
        transmision: string
        engine: string
        people: string
    }
}