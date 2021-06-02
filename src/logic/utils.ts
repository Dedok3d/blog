import { DependencyList, useEffect } from "react";
import { AsyncEffectCallback, Params } from "./model";

export function useEffectAsync(effect: AsyncEffectCallback, deps?: DependencyList) {
    useEffect(() => {
        effect();
    }, deps);
}

export function formatDate(date: Date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('.');
}

export function formatParams(url: string, params: Params) {
    let newUrl = url;
    if (Object.keys(params).length > 0) {
        newUrl = `${newUrl}?`;
        Object.keys(params).forEach((key, index) => {
            if (!params[key]) {
                return;
            }

            newUrl = `${newUrl}${index > 0 ? '&' : ''}${key}=${params[key]}`;
        });
    }
    return newUrl;
}