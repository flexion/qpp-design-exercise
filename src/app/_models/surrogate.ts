import {Provider} from './provider';
import {User} from './user';
export class Connection {
    id: number;
    provider: Provider;
    surrogate: Provider;
    user: User;
    status: ConnectionStatus;
    role: EmployeeRole;

    constructor(values: Object = {}) {
        Object .assign(this, values);
    }

    public roleName(): string {
        return EmployeeRole[this.role];
    }
}

export enum ConnectionStatus {
    'Pending',
    'Approved',
    'Rejected',
    'Canceled'
}

export enum SurrogateFunction {
    'EHR',
    'PECOS',
    'NPPES'
}

export enum EmployeeRole {
    '- Choose Role -',
    'Authorized Official',
    'Surrogate'
}

