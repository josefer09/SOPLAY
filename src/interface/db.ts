export interface DB {
    define: {
        timestamps: boolean
    },
    pool: {
        max: number,
        min: number,
        acquire: number,
        idle: number,
    },
    operatorAlies: boolean
}