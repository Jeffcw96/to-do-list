"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractAdvanceFilterQuery(queryParam, configFilter) {
    let processedQuery = {};
    for (const filter in configFilter) {
        let filterValue = queryParam[filter];
        if (filterValue) {
            const filterType = configFilter[filter].type;
            switch (filterType) {
                case 'date_from':
                    processedQuery[filter] = { $gte: filterValue };
                    break;
                case 'date_to':
                    processedQuery[filter] = { $lte: filterValue };
                    break;
                case 'date_range':
                    const dates = filterValue.split(',');
                    let dateFrom = dates[0];
                    let dateTo = dates[1];
                    processedQuery[filter] = { $gte: dateFrom, $lte: dateTo };
                    break;
                // To do: match in array
            }
            if (filterType === "regex") {
                const regexObject = new RegExp(filterValue, configFilter[filter]['$option']);
                processedQuery[filter] = regexObject;
            }
        }
    }
    return processedQuery;
}
exports.default = extractAdvanceFilterQuery;
