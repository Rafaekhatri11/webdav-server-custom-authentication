import { MethodCallArgs } from '../WebDAVRequest';
import { XMLElement } from 'xml-js-builder';
import { IResource } from '../../../resource/v1/IResource';
import { FSPath } from '../../../manager/v1/FSPath';
import { Lock } from '../../../resource/v1/lock/Lock';
export declare type EventsName = 'create' | 'delete' | 'copy' | 'move' | 'lock' | 'refreshLock' | 'unlock' | 'setProperty' | 'removeProperty' | 'write' | 'read' | 'addChild';
export declare type DetailsType = IResource | FSPath | Lock | XMLElement;
export declare type Listener = (arg: MethodCallArgs, subjectResource: IResource, details?: DetailsType) => void;
export declare function invoke(event: EventsName, arg: MethodCallArgs, subjectResource?: IResource, details?: DetailsType): void;
export declare function register(event: EventsName, listener: Listener): void;
export declare function registerWithName(event: EventsName, name: string, listener: Listener): void;
export declare function clear(event: EventsName): void;
export declare function clearAll(event: EventsName): void;
export declare function remove(event: EventsName, listener: Listener): void;
export declare function removeByName(event: EventsName, name: string): void;
