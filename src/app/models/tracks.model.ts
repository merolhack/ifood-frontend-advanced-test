import { Deserializable } from './deserializable.model';

export class Tracks implements Deserializable {

    public album: string;
    public artists: string;
    public explicit: boolean;
    public href: string;
    public id: string;
    public name: string;
    public preview_url: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}
