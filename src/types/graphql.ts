
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateWinHistoryInput {
    status: string;
    reference: string;
    amount: number;
    cashtokenId: string;
}

export class UpdateWinHistoryInput {
    id: number;
    status: string;
    reference: string;
    amount: number;
    cashtokenId: string;
}

export class WinHistory {
    id: number;
    status: string;
    reference: string;
    amount: number;
    cashtokenId: string;
}

export abstract class IQuery {
    abstract winHistorys(): Nullable<WinHistory>[] | Promise<Nullable<WinHistory>[]>;

    abstract winHistory(id: number): Nullable<WinHistory> | Promise<Nullable<WinHistory>>;
}

export abstract class IMutation {
    abstract createWinHistory(createWinHistoryInput: CreateWinHistoryInput): WinHistory | Promise<WinHistory>;

    abstract updateWinHistory(updateWinHistoryInput: UpdateWinHistoryInput): WinHistory | Promise<WinHistory>;

    abstract removeWinHistory(id: number): Nullable<WinHistory> | Promise<Nullable<WinHistory>>;
}

type Nullable<T> = T | null;
