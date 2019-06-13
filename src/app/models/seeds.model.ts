import { Deserializable } from './deserializable.model';

export class Seeds implements Deserializable {

    public afterFilteringSize: string;
    public afterRelinkingSize: string;
    public href: string;
    public id: string;
    public initialPoolSize: string;
    public type: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}
