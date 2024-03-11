export class ArrayUtilities {

    /**
     * Fuciona varios Set
     * @param list Listado de Set
     * @returns Set único
     */
    static flatSets<T extends any>(list: Set<T>[]) {
        return new Set(list.reduce((result: T[], set: Set<T>) => [...result, ...set], []));
    }
  
    /**
     * Aplica el método every de array con un listado de opciones
     * @param search Listado a verificar
     * @param list Listado de coincidencias que deben incluir los elementos
     * @returns verdadero cuando todos los elementos de @var search coinciden con todo el listado de @var list
     */
    static includesEvery(search: any[], list: any[]) {
        return search.every(val => list.includes(val));
    }
  
    /**
     * Aplica el método some de array con un listado de opciones
     * @param search Listado a verificar
     * @param list Listado de coincidencias que deben incluir los elementos
     * @returns verdadero cuando alguno los elementos de @var search coincide con todo el listado de @var list
     */
    static includesSome<T>(search: Array<keyof T>, list: any[]) {
        return search.some(val => list.includes(val));
    }
  
    /**
     * Ordena un listado de objetos de acuerdo a una clave específica
     * @param arr Listado de objetos
     * @param field Clave para ordenar
     */
    static sort<T extends Record<string, any>>(arr: T[], field: keyof T) {
        arr.sort((a, b) => a[field] > b[field] ? 1 : -1);
    }
  
  }