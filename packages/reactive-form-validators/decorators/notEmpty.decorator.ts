import { baseDecoratorFunction } from "./base-decorator.function"
import { AnnotationTypes } from "../core/validator.static";
import { BaseConfig } from "../models/config/base-config";

export function notEmpty(config?:BaseConfig) {
    return baseDecoratorFunction (AnnotationTypes.notEmpty, config)    
}
