import { PrivilegeManagerMethod } from './IPrivilegeManager';
import { IPrivilegeManager } from './IPrivilegeManager';
export declare type SimpleBasicPrivilege = 'all' | 'canCreate' | 'canDelete' | 'canWrite' | 'canSource' | 'canRead' | 'canListLocks' | 'canSetLock' | 'canGetAvailableLocks' | 'canAddChild' | 'canRemoveChild' | 'canGetChildren' | 'canSetProperty' | 'canGetProperty';
export declare abstract class SimplePrivilegeManager implements IPrivilegeManager {
    abstract canCreate: PrivilegeManagerMethod;
    abstract canDelete: PrivilegeManagerMethod;
    canMove: (arg: any, resource: any, callback: any) => void;
    canRename: (arg: any, resource: any, callback: any) => void;
    canAppend: (arg: any, resource: any, callback: any) => void;
    abstract canWrite: PrivilegeManagerMethod;
    abstract canRead: PrivilegeManagerMethod;
    abstract canSource: PrivilegeManagerMethod;
    canGetMimeType: (arg: any, resource: any, callback: any) => void;
    canGetSize: (arg: any, resource: any, callback: any) => void;
    abstract canListLocks: PrivilegeManagerMethod;
    abstract canSetLock: PrivilegeManagerMethod;
    canRemoveLock: (arg: any, resource: any, callback: any) => void;
    abstract canGetAvailableLocks: PrivilegeManagerMethod;
    canGetLock: (arg: any, resource: any, callback: any) => void;
    abstract canAddChild: PrivilegeManagerMethod;
    abstract canRemoveChild: PrivilegeManagerMethod;
    abstract canGetChildren: PrivilegeManagerMethod;
    abstract canSetProperty: PrivilegeManagerMethod;
    abstract canGetProperty: PrivilegeManagerMethod;
    canGetProperties: (arg: any, resource: any, callback: any) => void;
    canRemoveProperty: (arg: any, resource: any, callback: any) => void;
    canGetCreationDate: (arg: any, resource: any, callback: any) => void;
    canGetLastModifiedDate: (arg: any, resource: any, callback: any) => void;
    canGetWebName: (arg: any, resource: any, callback: any) => void;
    canGetType: (arg: any, resource: any, callback: any) => void;
}
