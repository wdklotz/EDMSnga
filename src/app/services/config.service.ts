/*
A class with static methods for getting and setting configuration
values to be used throughout the application. We won’t make this an injectable service,
because we want to use it before the application is bootstrapped—we want to set the
configuration values before Angular starts rendering, so there’s no chance of a 
configuration value not being set when Angular needs it.
*/

export class ConfigService {
    // [{_property:value},....]

    static set(property: string, value: string) {
        this['_' + property] = value;
    }

    static get(property): string {
        return this['_' + property];
    }
}

