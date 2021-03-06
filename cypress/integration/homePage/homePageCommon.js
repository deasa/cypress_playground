export const selectors = {
    firstPage: "[class*='ui-paginator-first']",
    prevPage: "[class*='caret-left']",
    nextPage: "[class*='caret-right']",
    lastPage: "[class*='ui-paginator-last']",
    pageNums: "[class*='ui-paginator-pages']",
    globalFilter: "[id='globalFilterInput']",
    partNumberFilter: "[id='PartNumber']",
    partDescriptionFilter: "[id='PartDescription']",
    productionVersionFilter: "[id='ProductionVersion']",
    revisionNumFilter: "[id='Revision']",
    revisionNameFilter: "[id='RevisionName']",
    documentNameFilter: "[id='DocumentName']",
    statusFilterDropdown: "p-multiselect",
    statusFilterLabel: "div[class*=label] span",
    partNumberColHeader: /^ Part $/,
    partNameColHeader: "Part Name",
    productionVersionColHeader: "Production Version",
    revisionNumberColHeader: "MBR Revision",
    revisionNameColHeader: "MBR Name",
    documentNameColHeader: "Document ID",
    partNumberCell: "[class*='PartNumber']",
    partDescriptionCell: "[class*='PartDescription']",
    productionVersionCell: "[class*='ProductionVersion']",
    revisionNumberCell: "[class*='Revision ']",
    revisionNameCell: "[class*='RevisionName']",
    documentNameCell: "[class*='DocumentName']",
    statusCell: "[class*='Status']",
    statusColHeader: "Status",
    actionsColHeader: "Actions",
    createNewMbrButton: /^Create New MBR$/,
    copyNewMbrFromFileButton: /^Copy MBR from File$/,
    exportTableButton: /^Export Table/,
    createNewMbrDialogDiv: "p-dialog > div",
    createNewMbrDialogCloseButton: "span.pi.pi-times",
    homePageTableBody: "#EMBR_HomeTable tbody",
}