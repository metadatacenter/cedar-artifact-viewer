export const SAMPLE_TEMPLATE = {
  "@id": "https://repo.metadatacenter.org/templates/7262bdfd-4e46-460f-84ad-70559fdeae97",
  "_ui": {
    "order": [
      "Data File Titles",
      "Data File Identity",
      "Data File Language",
      "Data File Subjects",
      "Data File Descriptions",
      "Data File Data Dictionary",
      "Data File Creators",
      "Data File Related Resources",
      "Data File Contributors",
      "Data File Rights",
      "Data File Dates",
      "Data File Parent Studies",
      "Data File Funding Sources",
      "Data File Distributions",
      "Data Characteristics Summary",
      "Data Sources",
      "Data Streams",
      "Data File Creation Processes",
      "Data File Temporal Coverage",
      "Data File Spatial Coverage",
      "Data File Elevation Coverage",
      "Auxiliary Metadata"
    ],
    "propertyLabels": {
      "Data File Titles": "Data File Titles",
      "Data File Identity": "Data File Identity",
      "Data File Language": "Data File Language",
      "Data File Subjects": "Data File Subjects",
      "Data File Descriptions": "Data File Descriptions",
      "Data File Data Dictionary": "Data File Data Dictionary",
      "Data File Creators": "Data File Creators",
      "Data File Related Resources": "Data File Related Resources",
      "Data File Contributors": "Data File Contributors",
      "Data File Rights": "Data File Rights",
      "Data File Dates": "Data File Dates",
      "Data File Parent Studies": "Data File Parent Studies",
      "Data File Funding Sources": "Data File Funding Sources",
      "Data File Distributions": "Data File Distributions",
      "Data Characteristics Summary": "Data Characteristics Summary",
      "Data Sources": "Data Sources",
      "Data Streams": "Data Streams",
      "Data File Creation Processes": "Data File Creation Processes",
      "Data File Temporal Coverage": "Data File Temporal Coverage",
      "Data File Spatial Coverage": "Data File Spatial Coverage",
      "Data File Elevation Coverage": "Data File Elevation Coverage",
      "Auxiliary Metadata": "Auxiliary Metadata"
    },
    "propertyDescriptions": {
      "Data File Titles": "A list of names or titles of the Data File being described. At least one Data File Title is required.  Mutliple values may be specified to provide titles in different languages.",
      "Data File Identity": "Information used to identify the Data File being described.",
      "Data File Language": "Language in which the data file being described is provided.",
      "Data File Subjects": "A list of concepts (keywords, classification, or free text terms) that define the data file or purpose (subjects which can be addressed) using the data file.",
      "Data File Descriptions": "A list of summaries of the Data File and its contents.",
      "Data File Data Dictionary": "Information about the Data Dictionary associated with the Data File",
      "Data File Creators": "A list of people and/or organizations that created the data file.",
      "Data File Related Resources": "A list of resources related to the Data File being described. Resources may be publications, manuals, depositories, web pages, or other entities that related to this data set and its creation and use.",
      "Data File Contributors": "A list of people and/or organizations that contributed in bringing into existence the data file being described. While data file creators are also contributors, data file creators should be provided in the Data File Creator section instead of here",
      "Data File Rights": "A list of ways in which the data file may or may not be accessed and used.",
      "Data File Dates": "A list of relevant dates related to the data file being described. Such dates pertain to some data-file-related event, for example \"creation date\", \"submission date\" etc. Dates are specified as a pair containing the actual date (in ISO-8601 format) and the event that the date relates to. See individual fields for specific examples.\n\nThe dates of some types of events can be captured by the RADx Data Hub, for example the \"Submitted\" date/time.",
      "Data File Parent Studies": "A list of research studies for which this data file was created.",
      "Data File Funding Sources": "A list of sources of funding that enabled and drove the creation of the data file. (Non-monetary sources are described under Contributor.) Each funding source may be described as a separate element (set of fields).",
      "Data File Distributions": "A list of specific (non-Data Hub) distributions for this data file. If the only available distribution for the Data File is in the RADx Data Hub, there is no need to fill out Distribution information.",
      "Data Characteristics Summary": "Characteristics of the data within the data file, particularly of the cohorts in the data file. This section provides multiple ways to enter such information; it is only necessary to enter the information in one of these formats.",
      "Data Sources": "A list of physical or conceptual entities (agents) that create the data streams that make up the described data file. A data source may or may not be associated with a fixed location; for example, a series of discrete sensors deployed over time, either to a single location or to a series of locations, may be considered a single data source in some systems.",
      "Data Streams": "A list of one or more variable records that contribute to this data file. Each data stream originates from a single data source (e.g., sensor, process, or person). A data stream can grow over time. ",
      "Data File Creation Processes": "A list of processes (activities) used to make the data file.",
      "Data File Temporal Coverage": "A list of temporal descriptions that specify the temporal coverage of the data contained within the data file associated with this metadata.",
      "Data File Spatial Coverage": "A list of geospatial descriptions that specify the geographical coverage of the data contained within the data file associated with this metadata.",
      "Data File Elevation Coverage": "A list of elevation ranges encompassed by the data within the data file being described.",
      "Auxiliary Metadata": "Information about the data file or metadata submission that does not fit into the other categories"
    },
    "pages": []
  },
  "title": "Template(RADx Metadata Specification)",
  "description": "Generated by CSV2CEDAR.",
  "type": "object",
  "properties": {
    "Data Characteristics Summary": {
      "@type": "https://schema.metadatacenter.org/core/TemplateElement",
      "type": "object",
      "title": "Element(Data Characteristics Summary)",
      "description": "Generated by CSV2CEDAR.",
      "properties": {
        "@context": {
          "properties": {
            "Data Characteristics Table in HTML": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInHtml"
              ]
            },
            "Data Characteristics Table in CSV": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInCsv"
              ]
            },
            "Data Characteristics Table in TSV": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInTsv"
              ]
            },
            "Data Characteristics Table in Key-Value Pairs": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInKeyValuePairs"
              ]
            }
          },
          "type": "object",
          "additionalProperties": false
        },
        "@id": {
          "format": "uri",
          "type": "string"
        },
        "@type": {
          "oneOf": [
            {
              "format": "uri",
              "type": "string"
            },
            {
              "items": {
                "format": "uri",
                "type": "string"
              },
              "uniqueItems": true,
              "minItems": 1,
              "type": "array"
            }
          ]
        },
        "Data Characteristics Table in CSV": {
          "@type": "https://schema.metadatacenter.org/core/TemplateField",
          "@id": "urn:uuid:31b7067e-bbb8-412e-9489-824e8f4d7301",
          "schema:identifier": "data_characteristics_table_in_csv",
          "schema:name": "Data Characteristics Table in CSV",
          "schema:description": "Enter comma-separated values containing summary statistics characterizing this data file.",
          "pav:derivedFrom": "",
          "skos:prefLabel": "Data Characteristics Table in CSV",
          "skos:altLabel": [],
          "pav:version": "1.0.0",
          "bibo:status": "bibo:draft",
          "_valueConstraints": {
            "defaultValue": "",
            "requiredValue": false,
            "multipleChoice": false
          },
          "_ui": {
            "inputType": "textarea"
          },
          "pav:createdOn": null,
          "pav:createdBy": null,
          "pav:lastUpdatedOn": null,
          "oslc:modifiedBy": null,
          "type": "object",
          "title": "Field(Data Characteristics Table in CSV)",
          "description": "Generated by CSV2CEDAR.",
          "properties": {
            "@type": {
              "oneOf": [
                {
                  "type": "string",
                  "format": "uri"
                },
                {
                  "type": "array",
                  "minItems": 1,
                  "items": {
                    "type": "string",
                    "format": "uri"
                  },
                  "uniqueItems": true
                }
              ]
            },
            "@value": {
              "type": [
                "string",
                "null"
              ]
            },
            "rdfs:label": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "additionalProperties": false,
          "schema:schemaVersion": "1.6.0",
          "@context": {
            "xsd": "http://www.w3.org/2001/XMLSchema#",
            "pav": "http://purl.org/pav/",
            "bibo": "http://purl.org/ontology/bibo/",
            "oslc": "http://open-services.net/ns/core#",
            "schema": "http://schema.org/",
            "skos": "http://www.w3.org/2004/02/skos/core#",
            "schema:name": {
              "@type": "xsd:string"
            },
            "schema:description": {
              "@type": "xsd:string"
            },
            "skos:prefLabel": {
              "@type": "xsd:string"
            },
            "skos:altLabel": {
              "@type": "xsd:string"
            },
            "pav:createdOn": {
              "@type": "xsd:dateTime"
            },
            "pav:createdBy": {
              "@type": "@id"
            },
            "pav:lastUpdatedOn": {
              "@type": "xsd:dateTime"
            },
            "oslc:modifiedBy": {
              "@type": "@id"
            }
          },
          "$schema": "http://json-schema.org/draft-04/schema#"
        },
        "Data Characteristics Table in TSV": {
          "@type": "https://schema.metadatacenter.org/core/TemplateField",
          "@id": "urn:uuid:eb8c1fa3-c58c-4cea-bb62-94b77c01f53c",
          "schema:identifier": "data_characteristics_table_in_tsv",
          "schema:name": "Data Characteristics Table in TSV",
          "schema:description": "Enter tab-separated values containing summary statistics characterizing this data file.",
          "pav:derivedFrom": "",
          "skos:prefLabel": "Data Characteristics Table in TSV",
          "skos:altLabel": [],
          "pav:version": "1.0.0",
          "bibo:status": "bibo:draft",
          "_valueConstraints": {
            "defaultValue": "",
            "requiredValue": false,
            "multipleChoice": false
          },
          "_ui": {
            "inputType": "textfield"
          },
          "pav:createdOn": null,
          "pav:createdBy": null,
          "pav:lastUpdatedOn": null,
          "oslc:modifiedBy": null,
          "type": "object",
          "title": "Field(Data Characteristics Table in TSV)",
          "description": "Generated by CSV2CEDAR.",
          "properties": {
            "@type": {
              "oneOf": [
                {
                  "type": "string",
                  "format": "uri"
                },
                {
                  "type": "array",
                  "minItems": 1,
                  "items": {
                    "type": "string",
                    "format": "uri"
                  },
                  "uniqueItems": true
                }
              ]
            },
            "@value": {
              "type": [
                "string",
                "null"
              ]
            },
            "rdfs:label": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "additionalProperties": false,
          "schema:schemaVersion": "1.6.0",
          "@context": {
            "xsd": "http://www.w3.org/2001/XMLSchema#",
            "pav": "http://purl.org/pav/",
            "bibo": "http://purl.org/ontology/bibo/",
            "oslc": "http://open-services.net/ns/core#",
            "schema": "http://schema.org/",
            "skos": "http://www.w3.org/2004/02/skos/core#",
            "schema:name": {
              "@type": "xsd:string"
            },
            "schema:description": {
              "@type": "xsd:string"
            },
            "skos:prefLabel": {
              "@type": "xsd:string"
            },
            "skos:altLabel": {
              "@type": "xsd:string"
            },
            "pav:createdOn": {
              "@type": "xsd:dateTime"
            },
            "pav:createdBy": {
              "@type": "@id"
            },
            "pav:lastUpdatedOn": {
              "@type": "xsd:dateTime"
            },
            "oslc:modifiedBy": {
              "@type": "@id"
            }
          },
          "$schema": "http://json-schema.org/draft-04/schema#"
        },
        "Data Characteristics Table in Key-Value Pairs": {
          "type": "array",
          "minItems": 0,
          "items": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:6a195339-d194-4482-85e9-b625e14f4fac",
            "schema:identifier": "data_characteristics_table_in_key-value_pairs",
            "schema:name": "Data Characteristics Table in Key-Value Pairs",
            "schema:description": "Enter the name of the characteristic being described in the first (key) field, and the value for that characteristic in the second (value) field. Note this is a repeating field and so can support multiple key-value pairs.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Data Characteristics Table in Key-Value Pairs",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_ui": {
              "inputType": "attribute-value"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "title": "Field(Data Characteristics Table in Key-Value Pairs)",
            "description": "Generated by CSV2CEDAR.",
            "type": "string",
            "multiValued": true,
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "Data Characteristics Table in HTML": {
          "@type": "https://schema.metadatacenter.org/core/TemplateField",
          "@id": "urn:uuid:cd538fd1-3219-48a2-9ef7-593de7f5e60e",
          "schema:identifier": "data_characteristics_table_in_html",
          "schema:name": "Data Characteristics Table in HTML",
          "schema:description": "Formatted HTML code for a table of summary statistics.",
          "pav:derivedFrom": "",
          "skos:prefLabel": "Data Characteristics Table in HTML",
          "skos:altLabel": [],
          "pav:version": "1.0.0",
          "bibo:status": "bibo:draft",
          "_valueConstraints": {
            "defaultValue": "",
            "requiredValue": false,
            "multipleChoice": false
          },
          "_ui": {
            "inputType": "textarea"
          },
          "pav:createdOn": null,
          "pav:createdBy": null,
          "pav:lastUpdatedOn": null,
          "oslc:modifiedBy": null,
          "type": "object",
          "title": "Field(Data Characteristics Table in HTML)",
          "description": "Generated by CSV2CEDAR.",
          "properties": {
            "@type": {
              "oneOf": [
                {
                  "type": "string",
                  "format": "uri"
                },
                {
                  "type": "array",
                  "minItems": 1,
                  "items": {
                    "type": "string",
                    "format": "uri"
                  },
                  "uniqueItems": true
                }
              ]
            },
            "@value": {
              "type": [
                "string",
                "null"
              ]
            },
            "rdfs:label": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "additionalProperties": false,
          "schema:schemaVersion": "1.6.0",
          "@context": {
            "xsd": "http://www.w3.org/2001/XMLSchema#",
            "pav": "http://purl.org/pav/",
            "bibo": "http://purl.org/ontology/bibo/",
            "oslc": "http://open-services.net/ns/core#",
            "schema": "http://schema.org/",
            "skos": "http://www.w3.org/2004/02/skos/core#",
            "schema:name": {
              "@type": "xsd:string"
            },
            "schema:description": {
              "@type": "xsd:string"
            },
            "skos:prefLabel": {
              "@type": "xsd:string"
            },
            "skos:altLabel": {
              "@type": "xsd:string"
            },
            "pav:createdOn": {
              "@type": "xsd:dateTime"
            },
            "pav:createdBy": {
              "@type": "@id"
            },
            "pav:lastUpdatedOn": {
              "@type": "xsd:dateTime"
            },
            "oslc:modifiedBy": {
              "@type": "@id"
            }
          },
          "$schema": "http://json-schema.org/draft-04/schema#"
        }
      },
      "multiValued": false,
      "required": [
        "@context",
        "@id",
        "Data Characteristics Table in HTML",
        "Data Characteristics Table in CSV",
        "Data Characteristics Table in TSV",
        "Data Characteristics Table in Key-Value Pairs"
      ],
      "additionalProperties": {
        "type": "object",
        "properties": {
          "@value": {
            "type": [
              "string",
              "null"
            ]
          },
          "@type": {
            "type": "string",
            "format": "uri"
          }
        },
        "required": [
          "@value"
        ],
        "additionalProperties": false
      },
      "schema:schemaVersion": "1.6.0",
      "@id": "http://example.org/4f5f3031-a4da-4b0a-a4b7-dea8a77c8c59",
      "_ui": {
        "order": [
          "Data Characteristics Table in HTML",
          "Data Characteristics Table in CSV",
          "Data Characteristics Table in TSV",
          "Data Characteristics Table in Key-Value Pairs"
        ],
        "propertyLabels": {
          "Data Characteristics Table in HTML": "Data Characteristics Table in HTML",
          "Data Characteristics Table in CSV": "Data Characteristics Table in CSV",
          "Data Characteristics Table in TSV": "Data Characteristics Table in TSV",
          "Data Characteristics Table in Key-Value Pairs": "Data Characteristics Table in Key-Value Pairs"
        },
        "propertyDescriptions": {
          "Data Characteristics Table in HTML": "Formatted HTML code for a table of summary statistics.",
          "Data Characteristics Table in CSV": "Enter comma-separated values containing summary statistics characterizing this data file.",
          "Data Characteristics Table in TSV": "Enter tab-separated values containing summary statistics characterizing this data file.",
          "Data Characteristics Table in Key-Value Pairs": "Enter the name of the characteristic being described in the first (key) field, and the value for that characteristic in the second (value) field. Note this is a repeating field and so can support multiple key-value pairs."
        }
      },
      "@context": {
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "pav": "http://purl.org/pav/",
        "bibo": "http://purl.org/ontology/bibo/",
        "oslc": "http://open-services.net/ns/core#",
        "schema": "http://schema.org/",
        "schema:name": {
          "@type": "xsd:string"
        },
        "schema:description": {
          "@type": "xsd:string"
        },
        "pav:createdOn": {
          "@type": "xsd:dateTime"
        },
        "pav:createdBy": {
          "@type": "@id"
        },
        "pav:lastUpdatedOn": {
          "@type": "xsd:dateTime"
        },
        "oslc:modifiedBy": {
          "@type": "@id"
        }
      },
      "schema:identifier": "data_characteristics_summary",
      "schema:name": "Data Characteristics Summary",
      "schema:description": "Characteristics of the data within the data file, particularly of the cohorts in the data file. This section provides multiple ways to enter such information; it is only necessary to enter the information in one of these formats.",
      "pav:derivedFrom": "",
      "skos:prefLabel": "Data Characteristics Summary",
      "skos:altLabel": [],
      "pav:version": "1.0.0",
      "bibo:status": "bibo:draft",
      "pav:createdOn": "2023-09-28T12:06:59-07:00",
      "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
      "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
      "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
      "$schema": "http://json-schema.org/draft-04/schema#"
    },
    "Data Streams": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data Streams)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Data Stream Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/dataStreamName"
                ]
              },
              "Data Stream Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/dataStreamIdentifier"
                ]
              },
              "Data Stream Identifier Scheme": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/dataStreamIdentifierScheme"
                ]
              },
              "Data Stream Variable Names": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/dataStreamVariableName"
                ]
              },
              "Data Stream Data Source Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/dataStreamDataSourceIdentifier"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Data Stream Variable Names": {
            "type": "array",
            "minItems": 0,
            "items": {
              "@type": "https://schema.metadatacenter.org/core/TemplateField",
              "@id": "urn:uuid:efb952b2-8003-4c29-9ded-2fe52ba987b0",
              "schema:identifier": "data_stream_variable_names",
              "schema:name": "Data Stream Variable Names",
              "schema:description": "The local names of variables contained in the data stream.",
              "pav:derivedFrom": "",
              "skos:prefLabel": "Data Stream Variable Names",
              "skos:altLabel": [],
              "pav:version": "1.0.0",
              "bibo:status": "bibo:draft",
              "_valueConstraints": {
                "defaultValue": "",
                "requiredValue": false,
                "multipleChoice": true
              },
              "_ui": {
                "inputType": "textfield"
              },
              "pav:createdOn": null,
              "pav:createdBy": null,
              "pav:lastUpdatedOn": null,
              "oslc:modifiedBy": null,
              "type": "object",
              "title": "Field(Data Stream Variable Names)",
              "description": "Generated by CSV2CEDAR.",
              "properties": {
                "@type": {
                  "oneOf": [
                    {
                      "type": "string",
                      "format": "uri"
                    },
                    {
                      "type": "array",
                      "minItems": 1,
                      "items": {
                        "type": "string",
                        "format": "uri"
                      },
                      "uniqueItems": true
                    }
                  ]
                },
                "@value": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "rdfs:label": {
                  "type": [
                    "string",
                    "null"
                  ]
                }
              },
              "additionalProperties": false,
              "schema:schemaVersion": "1.6.0",
              "@context": {
                "xsd": "http://www.w3.org/2001/XMLSchema#",
                "pav": "http://purl.org/pav/",
                "bibo": "http://purl.org/ontology/bibo/",
                "oslc": "http://open-services.net/ns/core#",
                "schema": "http://schema.org/",
                "skos": "http://www.w3.org/2004/02/skos/core#",
                "schema:name": {
                  "@type": "xsd:string"
                },
                "schema:description": {
                  "@type": "xsd:string"
                },
                "skos:prefLabel": {
                  "@type": "xsd:string"
                },
                "skos:altLabel": {
                  "@type": "xsd:string"
                },
                "pav:createdOn": {
                  "@type": "xsd:dateTime"
                },
                "pav:createdBy": {
                  "@type": "@id"
                },
                "pav:lastUpdatedOn": {
                  "@type": "xsd:dateTime"
                },
                "oslc:modifiedBy": {
                  "@type": "@id"
                }
              },
              "$schema": "http://json-schema.org/draft-04/schema#"
            }
          },
          "Data Stream Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:01569591-99fd-4251-bde6-0d5f9afb18d3",
            "schema:identifier": "data_stream_identifier",
            "schema:name": "Data Stream Identifier",
            "schema:description": "Globally unique string that identifies the collection of records coming from a data source.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Data Stream Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Data Stream Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Data Stream Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:506f42ba-a637-431a-be60-9fd187814337",
            "schema:identifier": "data_stream_name",
            "schema:name": "Data Stream Name",
            "schema:description": "Human readable name of collection of records coming from a data source. A data stream is a collection of one or more variable records originating from a single data source (e.g., sensor, process, or person). A data stream can grow over time.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Data Stream Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Data Stream Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Data Stream Identifier Scheme": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:dec32c87-65d1-4c37-be80-f2779e5148c9",
            "schema:identifier": "data_stream_identifier_scheme",
            "schema:name": "Data Stream Identifier Scheme",
            "schema:description": "The name of the scheme or authority used for the Data Stream Identifier.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Data Stream Identifier Scheme",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierType",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Data Stream Identifier Scheme)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Data Stream Data Source Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:243549d9-bf28-4c7f-a3bc-6ecc3a81006f",
            "schema:identifier": "data_stream_data_source_identifier",
            "schema:name": "Data Stream Data Source Identifier",
            "schema:description": "Globally unique string that identifies the data source (e.g., PID of an instrument) that generated this Data Stream.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Data Stream Data Source Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Data Stream Data Source Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Data Stream Name",
          "Data Stream Identifier",
          "Data Stream Identifier Scheme",
          "Data Stream Variable Names",
          "Data Stream Data Source Identifier"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/9e2aadad-e373-4234-859d-0019c3aef15d",
        "_ui": {
          "order": [
            "Data Stream Name",
            "Data Stream Identifier",
            "Data Stream Identifier Scheme",
            "Data Stream Variable Names",
            "Data Stream Data Source Identifier"
          ],
          "propertyLabels": {
            "Data Stream Name": "Data Stream Name",
            "Data Stream Identifier": "Data Stream Identifier",
            "Data Stream Identifier Scheme": "Data Stream Identifier Scheme",
            "Data Stream Variable Names": "Data Stream Variable Names",
            "Data Stream Data Source Identifier": "Data Stream Data Source Identifier"
          },
          "propertyDescriptions": {
            "Data Stream Name": "Human readable name of collection of records coming from a data source. A data stream is a collection of one or more variable records originating from a single data source (e.g., sensor, process, or person). A data stream can grow over time.",
            "Data Stream Identifier": "Globally unique string that identifies the collection of records coming from a data source.",
            "Data Stream Identifier Scheme": "The name of the scheme or authority used for the Data Stream Identifier.",
            "Data Stream Variable Names": "The local names of variables contained in the data stream.",
            "Data Stream Data Source Identifier": "Globally unique string that identifies the data source (e.g., PID of an instrument) that generated this Data Stream."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_streams",
        "schema:name": "Data Streams",
        "schema:description": "A list of one or more variable records that contribute to this data file. Each data stream originates from a single data source (e.g., sensor, process, or person). A data stream can grow over time. ",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data Streams",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "Data File Identity": {
      "@type": "https://schema.metadatacenter.org/core/TemplateElement",
      "type": "object",
      "title": "Element(Data File Identity)",
      "description": "Generated by CSV2CEDAR.",
      "properties": {
        "@context": {
          "properties": {
            "Identifier": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/identifier"
              ]
            },
            "Identifier Type": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/identifierType"
              ]
            },
            "File Name": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/fileName"
              ]
            },
            "Version": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/version"
              ]
            },
            "SHA256 digest": {
              "enum": [
                "https://purl.org/radx-terms/sha256"
              ]
            }
          },
          "type": "object",
          "additionalProperties": false
        },
        "@id": {
          "format": "uri",
          "type": "string"
        },
        "@type": {
          "oneOf": [
            {
              "format": "uri",
              "type": "string"
            },
            {
              "items": {
                "format": "uri",
                "type": "string"
              },
              "uniqueItems": true,
              "minItems": 1,
              "type": "array"
            }
          ]
        },
        "Identifier Type": {
          "@type": "https://schema.metadatacenter.org/core/TemplateField",
          "@id": "urn:uuid:8ce6e392-4418-49cf-a0d0-df1296b82cb3",
          "schema:identifier": "identifier_type",
          "schema:name": "Identifier Type",
          "schema:description": "The identifier type used to identify the resource being described.\n\nThis need not be provided if the identifier is either a DOI that begins with \"doi:\" or \"https://doi.org/\", or it is an IRI that begins with either \"http://\" or \"https://\" ",
          "pav:derivedFrom": "",
          "skos:prefLabel": "Identifier Type",
          "skos:altLabel": [],
          "pav:version": "1.0.0",
          "bibo:status": "bibo:draft",
          "_valueConstraints": {
            "requiredValue": false,
            "multipleChoice": false,
            "classes": [],
            "branches": [
              {
                "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                "acronym": "FDC-GDMT",
                "name": "FDC-GDMT",
                "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierType",
                "maxDepth": 2147483647
              }
            ],
            "ontologies": [],
            "literals": []
          },
          "_ui": {
            "inputType": "textfield"
          },
          "pav:createdOn": null,
          "pav:createdBy": null,
          "pav:lastUpdatedOn": null,
          "oslc:modifiedBy": null,
          "type": "object",
          "title": "Field(Identifier Type)",
          "description": "Generated by CSV2CEDAR.",
          "properties": {
            "@type": {
              "oneOf": [
                {
                  "type": "string",
                  "format": "uri"
                },
                {
                  "type": "array",
                  "minItems": 1,
                  "items": {
                    "type": "string",
                    "format": "uri"
                  },
                  "uniqueItems": true
                }
              ]
            },
            "rdfs:label": {
              "type": [
                "string",
                "null"
              ]
            },
            "@id": {
              "type": "string",
              "format": "uri"
            }
          },
          "additionalProperties": false,
          "schema:schemaVersion": "1.6.0",
          "@context": {
            "xsd": "http://www.w3.org/2001/XMLSchema#",
            "pav": "http://purl.org/pav/",
            "bibo": "http://purl.org/ontology/bibo/",
            "oslc": "http://open-services.net/ns/core#",
            "schema": "http://schema.org/",
            "skos": "http://www.w3.org/2004/02/skos/core#",
            "schema:name": {
              "@type": "xsd:string"
            },
            "schema:description": {
              "@type": "xsd:string"
            },
            "skos:prefLabel": {
              "@type": "xsd:string"
            },
            "skos:altLabel": {
              "@type": "xsd:string"
            },
            "pav:createdOn": {
              "@type": "xsd:dateTime"
            },
            "pav:createdBy": {
              "@type": "@id"
            },
            "pav:lastUpdatedOn": {
              "@type": "xsd:dateTime"
            },
            "oslc:modifiedBy": {
              "@type": "@id"
            }
          },
          "$schema": "http://json-schema.org/draft-04/schema#"
        },
        "Identifier": {
          "@type": "https://schema.metadatacenter.org/core/TemplateField",
          "@id": "urn:uuid:dab24df6-b14b-4544-a4fc-0553d99dec41",
          "schema:identifier": "identifier",
          "schema:name": "Identifier",
          "schema:description": "A globally unique string that identifies the Data File being described. It is typically a DOI (Digital Object Identifier) or IRI (International Resource Identifier, or Web address). The identifier is typically generated by data providers or data publishers who wish to have a citable and Web-accessible resource.\n\nExample DOIs are `doi:10.1000/182` or `https://doi.org/10.1000/182`, both of which identify the DOI Handbook, which has a DOI of 10.1000/182\n\nSee also:  [https://en.wikipedia.org/wiki/Digital_object_identifier](https://en.wikipedia.org/wiki/Digital_object_identifier)",
          "pav:derivedFrom": "",
          "skos:prefLabel": "Identifier",
          "skos:altLabel": [],
          "pav:version": "1.0.0",
          "bibo:status": "bibo:draft",
          "_valueConstraints": {
            "defaultValue": "",
            "requiredValue": false,
            "multipleChoice": false
          },
          "_ui": {
            "inputType": "textfield"
          },
          "pav:createdOn": null,
          "pav:createdBy": null,
          "pav:lastUpdatedOn": null,
          "oslc:modifiedBy": null,
          "type": "object",
          "title": "Field(Identifier)",
          "description": "Generated by CSV2CEDAR.",
          "properties": {
            "@type": {
              "oneOf": [
                {
                  "type": "string",
                  "format": "uri"
                },
                {
                  "type": "array",
                  "minItems": 1,
                  "items": {
                    "type": "string",
                    "format": "uri"
                  },
                  "uniqueItems": true
                }
              ]
            },
            "@value": {
              "type": [
                "string",
                "null"
              ]
            },
            "rdfs:label": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "additionalProperties": false,
          "schema:schemaVersion": "1.6.0",
          "@context": {
            "xsd": "http://www.w3.org/2001/XMLSchema#",
            "pav": "http://purl.org/pav/",
            "bibo": "http://purl.org/ontology/bibo/",
            "oslc": "http://open-services.net/ns/core#",
            "schema": "http://schema.org/",
            "skos": "http://www.w3.org/2004/02/skos/core#",
            "schema:name": {
              "@type": "xsd:string"
            },
            "schema:description": {
              "@type": "xsd:string"
            },
            "skos:prefLabel": {
              "@type": "xsd:string"
            },
            "skos:altLabel": {
              "@type": "xsd:string"
            },
            "pav:createdOn": {
              "@type": "xsd:dateTime"
            },
            "pav:createdBy": {
              "@type": "@id"
            },
            "pav:lastUpdatedOn": {
              "@type": "xsd:dateTime"
            },
            "oslc:modifiedBy": {
              "@type": "@id"
            }
          },
          "$schema": "http://json-schema.org/draft-04/schema#"
        },
        "SHA256 digest": {
          "@type": "https://schema.metadatacenter.org/core/TemplateField",
          "@id": "urn:uuid:377a6de9-d227-4a1d-8427-ef388d9380c2",
          "schema:identifier": "sha256_digest",
          "schema:name": "SHA256 digest",
          "schema:description": "A SHA256 digest of the Data File contents. This is a 64 characters long hexadecimal string. \n\nFor example, the SHA256 digest of the string, \"RADx Data Hub\" is `ebff8d3da88b292622d3bfc36bdac4c4537ddc56cb07f344c5223d6b6f9cd011`.\n\nOn macOS the following command may be used to generate the SHA256 digest of a file.\n\n```\nshasum -a 256 /path/to/file\n```",
          "pav:derivedFrom": "",
          "skos:prefLabel": "SHA256 digest",
          "skos:altLabel": [],
          "pav:version": "1.0.0",
          "bibo:status": "bibo:draft",
          "_valueConstraints": {
            "defaultValue": "",
            "requiredValue": false,
            "multipleChoice": false
          },
          "_ui": {
            "inputType": "textfield"
          },
          "pav:createdOn": null,
          "pav:createdBy": null,
          "pav:lastUpdatedOn": null,
          "oslc:modifiedBy": null,
          "type": "object",
          "title": "Field(SHA256 digest)",
          "description": "Generated by CSV2CEDAR.",
          "properties": {
            "@type": {
              "oneOf": [
                {
                  "type": "string",
                  "format": "uri"
                },
                {
                  "type": "array",
                  "minItems": 1,
                  "items": {
                    "type": "string",
                    "format": "uri"
                  },
                  "uniqueItems": true
                }
              ]
            },
            "@value": {
              "type": [
                "string",
                "null"
              ]
            },
            "rdfs:label": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "additionalProperties": false,
          "schema:schemaVersion": "1.6.0",
          "@context": {
            "xsd": "http://www.w3.org/2001/XMLSchema#",
            "pav": "http://purl.org/pav/",
            "bibo": "http://purl.org/ontology/bibo/",
            "oslc": "http://open-services.net/ns/core#",
            "schema": "http://schema.org/",
            "skos": "http://www.w3.org/2004/02/skos/core#",
            "schema:name": {
              "@type": "xsd:string"
            },
            "schema:description": {
              "@type": "xsd:string"
            },
            "skos:prefLabel": {
              "@type": "xsd:string"
            },
            "skos:altLabel": {
              "@type": "xsd:string"
            },
            "pav:createdOn": {
              "@type": "xsd:dateTime"
            },
            "pav:createdBy": {
              "@type": "@id"
            },
            "pav:lastUpdatedOn": {
              "@type": "xsd:dateTime"
            },
            "oslc:modifiedBy": {
              "@type": "@id"
            }
          },
          "$schema": "http://json-schema.org/draft-04/schema#"
        },
        "Version": {
          "@type": "https://schema.metadatacenter.org/core/TemplateField",
          "@id": "urn:uuid:83df00d8-c5f6-471e-8204-735457d29b1a",
          "schema:identifier": "version",
          "schema:name": "Version",
          "schema:description": "The string identifying the version of the data file or other resource being described.\n\nThis field accepts any version string, but we suggest that you use semantic versioning of the form `major.minor.patch`. for example, `2.1.4`.",
          "pav:derivedFrom": "",
          "skos:prefLabel": "Version",
          "skos:altLabel": [],
          "pav:version": "1.0.0",
          "bibo:status": "bibo:draft",
          "_valueConstraints": {
            "defaultValue": "",
            "requiredValue": false,
            "multipleChoice": false
          },
          "_ui": {
            "inputType": "textfield"
          },
          "pav:createdOn": null,
          "pav:createdBy": null,
          "pav:lastUpdatedOn": null,
          "oslc:modifiedBy": null,
          "type": "object",
          "title": "Field(Version)",
          "description": "Generated by CSV2CEDAR.",
          "properties": {
            "@type": {
              "oneOf": [
                {
                  "type": "string",
                  "format": "uri"
                },
                {
                  "type": "array",
                  "minItems": 1,
                  "items": {
                    "type": "string",
                    "format": "uri"
                  },
                  "uniqueItems": true
                }
              ]
            },
            "@value": {
              "type": [
                "string",
                "null"
              ]
            },
            "rdfs:label": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "additionalProperties": false,
          "schema:schemaVersion": "1.6.0",
          "@context": {
            "xsd": "http://www.w3.org/2001/XMLSchema#",
            "pav": "http://purl.org/pav/",
            "bibo": "http://purl.org/ontology/bibo/",
            "oslc": "http://open-services.net/ns/core#",
            "schema": "http://schema.org/",
            "skos": "http://www.w3.org/2004/02/skos/core#",
            "schema:name": {
              "@type": "xsd:string"
            },
            "schema:description": {
              "@type": "xsd:string"
            },
            "skos:prefLabel": {
              "@type": "xsd:string"
            },
            "skos:altLabel": {
              "@type": "xsd:string"
            },
            "pav:createdOn": {
              "@type": "xsd:dateTime"
            },
            "pav:createdBy": {
              "@type": "@id"
            },
            "pav:lastUpdatedOn": {
              "@type": "xsd:dateTime"
            },
            "oslc:modifiedBy": {
              "@type": "@id"
            }
          },
          "$schema": "http://json-schema.org/draft-04/schema#"
        },
        "File Name": {
          "@type": "https://schema.metadatacenter.org/core/TemplateField",
          "@id": "urn:uuid:68270089-bcd1-4e73-a1fb-b6456e3db5b3",
          "schema:identifier": "file_name",
          "schema:name": "File Name",
          "schema:description": "The local name of the resource (for example, in a file-based operating system or web service).",
          "pav:derivedFrom": "",
          "skos:prefLabel": "File Name",
          "skos:altLabel": [],
          "pav:version": "1.0.0",
          "bibo:status": "bibo:draft",
          "_valueConstraints": {
            "defaultValue": "",
            "requiredValue": false,
            "multipleChoice": false
          },
          "_ui": {
            "inputType": "textfield"
          },
          "pav:createdOn": null,
          "pav:createdBy": null,
          "pav:lastUpdatedOn": null,
          "oslc:modifiedBy": null,
          "type": "object",
          "title": "Field(File Name)",
          "description": "Generated by CSV2CEDAR.",
          "properties": {
            "@type": {
              "oneOf": [
                {
                  "type": "string",
                  "format": "uri"
                },
                {
                  "type": "array",
                  "minItems": 1,
                  "items": {
                    "type": "string",
                    "format": "uri"
                  },
                  "uniqueItems": true
                }
              ]
            },
            "@value": {
              "type": [
                "string",
                "null"
              ]
            },
            "rdfs:label": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "additionalProperties": false,
          "schema:schemaVersion": "1.6.0",
          "@context": {
            "xsd": "http://www.w3.org/2001/XMLSchema#",
            "pav": "http://purl.org/pav/",
            "bibo": "http://purl.org/ontology/bibo/",
            "oslc": "http://open-services.net/ns/core#",
            "schema": "http://schema.org/",
            "skos": "http://www.w3.org/2004/02/skos/core#",
            "schema:name": {
              "@type": "xsd:string"
            },
            "schema:description": {
              "@type": "xsd:string"
            },
            "skos:prefLabel": {
              "@type": "xsd:string"
            },
            "skos:altLabel": {
              "@type": "xsd:string"
            },
            "pav:createdOn": {
              "@type": "xsd:dateTime"
            },
            "pav:createdBy": {
              "@type": "@id"
            },
            "pav:lastUpdatedOn": {
              "@type": "xsd:dateTime"
            },
            "oslc:modifiedBy": {
              "@type": "@id"
            }
          },
          "$schema": "http://json-schema.org/draft-04/schema#"
        }
      },
      "multiValued": false,
      "required": [
        "@context",
        "@id",
        "Identifier",
        "Identifier Type",
        "File Name",
        "Version",
        "SHA256 digest"
      ],
      "additionalProperties": false,
      "schema:schemaVersion": "1.6.0",
      "@id": "http://example.org/8fda4d49-a141-409a-bd66-ade7a49eddc4",
      "_ui": {
        "order": [
          "Identifier",
          "Identifier Type",
          "File Name",
          "Version",
          "SHA256 digest"
        ],
        "propertyLabels": {
          "Identifier": "Identifier",
          "Identifier Type": "Identifier Type",
          "File Name": "File Name",
          "Version": "Version",
          "SHA256 digest": "SHA256 digest"
        },
        "propertyDescriptions": {
          "Identifier": "A globally unique string that identifies the Data File being described. It is typically a DOI (Digital Object Identifier) or IRI (International Resource Identifier, or Web address). The identifier is typically generated by data providers or data publishers who wish to have a citable and Web-accessible resource.\n\nExample DOIs are `doi:10.1000/182` or `https://doi.org/10.1000/182`, both of which identify the DOI Handbook, which has a DOI of 10.1000/182\n\nSee also:  [https://en.wikipedia.org/wiki/Digital_object_identifier](https://en.wikipedia.org/wiki/Digital_object_identifier)",
          "Identifier Type": "The identifier type used to identify the resource being described.\n\nThis need not be provided if the identifier is either a DOI that begins with \"doi:\" or \"https://doi.org/\", or it is an IRI that begins with either \"http://\" or \"https://\" ",
          "File Name": "The local name of the resource (for example, in a file-based operating system or web service).",
          "Version": "The string identifying the version of the data file or other resource being described.\n\nThis field accepts any version string, but we suggest that you use semantic versioning of the form `major.minor.patch`. for example, `2.1.4`.",
          "SHA256 digest": "A SHA256 digest of the Data File contents. This is a 64 characters long hexadecimal string. \n\nFor example, the SHA256 digest of the string, \"RADx Data Hub\" is `ebff8d3da88b292622d3bfc36bdac4c4537ddc56cb07f344c5223d6b6f9cd011`.\n\nOn macOS the following command may be used to generate the SHA256 digest of a file.\n\n```\nshasum -a 256 /path/to/file\n```"
        }
      },
      "@context": {
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "pav": "http://purl.org/pav/",
        "bibo": "http://purl.org/ontology/bibo/",
        "oslc": "http://open-services.net/ns/core#",
        "schema": "http://schema.org/",
        "schema:name": {
          "@type": "xsd:string"
        },
        "schema:description": {
          "@type": "xsd:string"
        },
        "pav:createdOn": {
          "@type": "xsd:dateTime"
        },
        "pav:createdBy": {
          "@type": "@id"
        },
        "pav:lastUpdatedOn": {
          "@type": "xsd:dateTime"
        },
        "oslc:modifiedBy": {
          "@type": "@id"
        }
      },
      "schema:identifier": "data_file_identity",
      "schema:name": "Data File Identity",
      "schema:description": "Information used to identify the Data File being described.",
      "pav:derivedFrom": "",
      "skos:prefLabel": "Data File Identity",
      "skos:altLabel": [],
      "pav:version": "1.0.0",
      "bibo:status": "bibo:draft",
      "pav:createdOn": "2023-09-28T12:06:59-07:00",
      "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
      "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
      "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
      "$schema": "http://json-schema.org/draft-04/schema#"
    },
    "Auxiliary Metadata": {
      "@type": "https://schema.metadatacenter.org/core/TemplateElement",
      "type": "object",
      "title": "Element(Auxiliary Metadata)",
      "description": "Generated by CSV2CEDAR.",
      "properties": {
        "@context": {
          "properties": {
            "Data File Descriptive Key-Value Pairs": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataKeyValuePair"
              ]
            },
            "Additional Commentary": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataCommentary"
              ]
            }
          },
          "type": "object",
          "additionalProperties": false
        },
        "@id": {
          "format": "uri",
          "type": "string"
        },
        "@type": {
          "oneOf": [
            {
              "format": "uri",
              "type": "string"
            },
            {
              "items": {
                "format": "uri",
                "type": "string"
              },
              "uniqueItems": true,
              "minItems": 1,
              "type": "array"
            }
          ]
        },
        "Additional Commentary": {
          "type": "array",
          "minItems": 0,
          "items": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:e7e1d69d-941e-48e3-99d3-6de93699a15e",
            "schema:identifier": "additional_commentary",
            "schema:name": "Additional Commentary",
            "schema:description": "This text field can contain additional information about the data file or provided metadata. Multiple Additional Commentary fields may be filled out to address different topics.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Additional Commentary",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": true
            },
            "_ui": {
              "inputType": "textarea"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Additional Commentary)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "Data File Descriptive Key-Value Pairs": {
          "type": "array",
          "minItems": 0,
          "items": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:e35fe9b4-4c1f-49e5-bbd2-dac6e31822fb",
            "schema:identifier": "data_file_descriptive_key-value_pairs",
            "schema:name": "Data File Descriptive Key-Value Pairs",
            "schema:description": "This field supports entry of both the metadata attribute name (in the first field), and the value for that attribute (in the second field). Note this is a repeating field and so can support multiple key-value pairs.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Data File Descriptive Key-Value Pairs",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_ui": {
              "inputType": "attribute-value"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "title": "Field(Data File Descriptive Key-Value Pairs)",
            "description": "Generated by CSV2CEDAR.",
            "type": "string",
            "multiValued": true,
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        }
      },
      "multiValued": false,
      "required": [
        "@context",
        "@id",
        "Data File Descriptive Key-Value Pairs",
        "Additional Commentary"
      ],
      "additionalProperties": {
        "type": "object",
        "properties": {
          "@value": {
            "type": [
              "string",
              "null"
            ]
          },
          "@type": {
            "type": "string",
            "format": "uri"
          }
        },
        "required": [
          "@value"
        ],
        "additionalProperties": false
      },
      "schema:schemaVersion": "1.6.0",
      "@id": "http://example.org/81c341b1-44a5-492a-8eb1-eda6d9b90177",
      "_ui": {
        "order": [
          "Data File Descriptive Key-Value Pairs",
          "Additional Commentary"
        ],
        "propertyLabels": {
          "Data File Descriptive Key-Value Pairs": "Data File Descriptive Key-Value Pairs",
          "Additional Commentary": "Additional Commentary"
        },
        "propertyDescriptions": {
          "Data File Descriptive Key-Value Pairs": "This field supports entry of both the metadata attribute name (in the first field), and the value for that attribute (in the second field). Note this is a repeating field and so can support multiple key-value pairs.",
          "Additional Commentary": "This text field can contain additional information about the data file or provided metadata. Multiple Additional Commentary fields may be filled out to address different topics."
        }
      },
      "@context": {
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "pav": "http://purl.org/pav/",
        "bibo": "http://purl.org/ontology/bibo/",
        "oslc": "http://open-services.net/ns/core#",
        "schema": "http://schema.org/",
        "schema:name": {
          "@type": "xsd:string"
        },
        "schema:description": {
          "@type": "xsd:string"
        },
        "pav:createdOn": {
          "@type": "xsd:dateTime"
        },
        "pav:createdBy": {
          "@type": "@id"
        },
        "pav:lastUpdatedOn": {
          "@type": "xsd:dateTime"
        },
        "oslc:modifiedBy": {
          "@type": "@id"
        }
      },
      "schema:identifier": "auxiliary_metadata",
      "schema:name": "Auxiliary Metadata",
      "schema:description": "Information about the data file or metadata submission that does not fit into the other categories",
      "pav:derivedFrom": "",
      "skos:prefLabel": "Auxiliary Metadata",
      "skos:altLabel": [],
      "pav:version": "1.0.0",
      "bibo:status": "bibo:draft",
      "pav:createdOn": "2023-09-28T12:06:59-07:00",
      "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
      "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
      "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
      "$schema": "http://json-schema.org/draft-04/schema#"
    },
    "@type": {
      "oneOf": [
        {
          "type": "string",
          "format": "uri"
        },
        {
          "type": "array",
          "minItems": 1,
          "items": {
            "type": "string",
            "format": "uri"
          },
          "uniqueItems": true
        }
      ]
    },
    "pav:createdOn": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "Data File Funding Sources": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Funding Sources)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Award Title": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/awardTitle"
                ]
              },
              "Award Page URL": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/awardPageUrl"
                ]
              },
              "Award Local Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/awardIdentifier"
                ]
              },
              "Funder Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/funderName"
                ]
              },
              "Funder Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/funderIdentifier"
                ]
              },
              "Funder Identifier Scheme": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/funderIdentifierScheme"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Award Title": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:02a35018-4786-4731-956d-a2d0dfad7973",
            "schema:identifier": "award_title",
            "schema:name": "Award Title",
            "schema:description": "The human readable title of the award, grant, or other specific funding mechanism for the described data file.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Award Title",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Award Title)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Funder Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:40324983-058f-41c6-a925-40fcdcdc84b7",
            "schema:identifier": "funder_identifier",
            "schema:name": "Funder Identifier",
            "schema:description": "Globally unique string that identifies the funding provider. A list of NIH Institute identifiers may be found [here](https://ror.org/01cwqze88).\n\n|NIH Institute | Identifier |\n|----------|------------|\n|Center for Information Technology|[https://ror.org/03jh5a977](https://ror.org/03jh5a977)|\n|Center for Scientific Review|[https://ror.org/04r5s4b52](https://ror.org/04r5s4b52)|\n|Eunice Kennedy Shriver National Institute of Child Health and Human Development|[https://ror.org/04byxyr05](https://ror.org/04byxyr05)|\n|Fogarty International Center|[https://ror.org/02xey9a22](https://ror.org/02xey9a22)|\n|National Cancer Institute|[https://ror.org/040gcmg81](https://ror.org/040gcmg81)|\n|National Center for Advancing Translational Sciences|[https://ror.org/04pw6fb54](https://ror.org/04pw6fb54)|\n|National Center for Complementary and Integrative Health|[https://ror.org/00190t495](https://ror.org/00190t495)|\n|National Eye Institute|[https://ror.org/03wkg3b53](https://ror.org/03wkg3b53)|\n|National Heart Lung and Blood Institute|[https://ror.org/012pb6c26](https://ror.org/012pb6c26)|\n|National Human Genome Research Institute|[https://ror.org/00baak391](https://ror.org/00baak391)|\n|National Institute of Allergy and Infectious Diseases|[https://ror.org/043z4tv69](https://ror.org/043z4tv69)|\n|National Institute of Arthritis and Musculoskeletal and Skin Diseases|[https://ror.org/006zn3t30](https://ror.org/006zn3t30)|\n|National Institute of Biomedical Imaging and Bioengineering|[https://ror.org/00372qc85](https://ror.org/00372qc85)|\n|National Institute of Dental and Craniofacial Research|[https://ror.org/004a2wv92](https://ror.org/004a2wv92)|\n|National Institute of Diabetes and Digestive and Kidney Diseases|[https://ror.org/00adh9b73](https://ror.org/00adh9b73)|\n|National Institute of Environmental Health Sciences|[https://ror.org/00j4k1h63](https://ror.org/00j4k1h63)|\n|National Institute of General Medical Sciences|[https://ror.org/04q48ey07](https://ror.org/04q48ey07)|\n|National Institute of Mental Health|[https://ror.org/04xeg9z08](https://ror.org/04xeg9z08)|\n|National Institute of Neurological Disorders and Stroke|[https://ror.org/01s5ya894](https://ror.org/01s5ya894)|\n|National Institute of Nursing Research|[https://ror.org/01y3zfr79](https://ror.org/01y3zfr79)|\n|National Institute on Aging|[https://ror.org/049v75w11](https://ror.org/049v75w11)|\n|National Institute on Alcohol Abuse and Alcoholism|[https://ror.org/02jzrsm59](https://ror.org/02jzrsm59)|\n|National Institute on Deafness and Other Communication Disorders|[https://ror.org/04mhx6838](https://ror.org/04mhx6838)|\n|National Institute on Drug Abuse|[https://ror.org/00fq5cm18](https://ror.org/00fq5cm18)|\n|National Institute on Minority Health and Health Disparities|[https://ror.org/0493hgw16](https://ror.org/0493hgw16)|\n|National Institutes of Health Clinical Center|[https://ror.org/04vfsmv21](https://ror.org/04vfsmv21)|\n|Office of the Director|[https://ror.org/00fj8a872](https://ror.org/00fj8a872)|\n|United States National Library of Medicine|[https://ror.org/0060t0j89](https://ror.org/0060t0j89)|",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Funder Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Funder Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Funder Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:ea94b96c-a2f0-42e1-8ede-bf0c67d6c613",
            "schema:identifier": "funder_name",
            "schema:name": "Funder Name",
            "schema:description": "Name of the organization providing the funding for the described data file ('funding provider').\n\nThis is typically the NIH Institute that awarded the grant.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Funder Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Funder Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Award Local Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:82ab98e7-75a7-44f3-805b-ce26b0f1b7f8",
            "schema:identifier": "award_local_identifier",
            "schema:name": "Award Local Identifier",
            "schema:description": "The code assigned by the funding provider to a sponsored award (grant). (This can be an IRI, but typically is not.)",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Award Local Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Award Local Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Funder Identifier Scheme": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:8ff9bce6-91a6-4822-b214-17b8ff405ea0",
            "schema:identifier": "funder_identifier_scheme",
            "schema:name": "Funder Identifier Scheme",
            "schema:description": "Name of the scheme or authority for the Funder Identifier. This field is optional as in most cases it can be determined from the _Funder Identifier_ field.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Funder Identifier Scheme",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierScheme",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Funder Identifier Scheme)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Award Page URL": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:35b89e75-babe-4c9c-ba7a-d28eda62fc2a",
            "schema:identifier": "award_page_url",
            "schema:name": "Award Page URL",
            "schema:description": "The unique identifier (IRI) leading to a page provided by the funder for more information about the award (grant).",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Award Page URL",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "link"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Award Page URL)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Award Title",
          "Award Page URL",
          "Award Local Identifier",
          "Funder Name",
          "Funder Identifier",
          "Funder Identifier Scheme"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/01a830d7-a835-4a63-b23a-f703563ac55b",
        "_ui": {
          "order": [
            "Award Title",
            "Award Page URL",
            "Award Local Identifier",
            "Funder Name",
            "Funder Identifier",
            "Funder Identifier Scheme"
          ],
          "propertyLabels": {
            "Award Title": "Award Title",
            "Award Page URL": "Award Page URL",
            "Award Local Identifier": "Award Local Identifier",
            "Funder Name": "Funder Name",
            "Funder Identifier": "Funder Identifier",
            "Funder Identifier Scheme": "Funder Identifier Scheme"
          },
          "propertyDescriptions": {
            "Award Title": "The human readable title of the award, grant, or other specific funding mechanism for the described data file.",
            "Award Page URL": "The unique identifier (IRI) leading to a page provided by the funder for more information about the award (grant).",
            "Award Local Identifier": "The code assigned by the funding provider to a sponsored award (grant). (This can be an IRI, but typically is not.)",
            "Funder Name": "Name of the organization providing the funding for the described data file ('funding provider').\n\nThis is typically the NIH Institute that awarded the grant.",
            "Funder Identifier": "Globally unique string that identifies the funding provider. A list of NIH Institute identifiers may be found [here](https://ror.org/01cwqze88).\n\n|NIH Institute | Identifier |\n|----------|------------|\n|Center for Information Technology|[https://ror.org/03jh5a977](https://ror.org/03jh5a977)|\n|Center for Scientific Review|[https://ror.org/04r5s4b52](https://ror.org/04r5s4b52)|\n|Eunice Kennedy Shriver National Institute of Child Health and Human Development|[https://ror.org/04byxyr05](https://ror.org/04byxyr05)|\n|Fogarty International Center|[https://ror.org/02xey9a22](https://ror.org/02xey9a22)|\n|National Cancer Institute|[https://ror.org/040gcmg81](https://ror.org/040gcmg81)|\n|National Center for Advancing Translational Sciences|[https://ror.org/04pw6fb54](https://ror.org/04pw6fb54)|\n|National Center for Complementary and Integrative Health|[https://ror.org/00190t495](https://ror.org/00190t495)|\n|National Eye Institute|[https://ror.org/03wkg3b53](https://ror.org/03wkg3b53)|\n|National Heart Lung and Blood Institute|[https://ror.org/012pb6c26](https://ror.org/012pb6c26)|\n|National Human Genome Research Institute|[https://ror.org/00baak391](https://ror.org/00baak391)|\n|National Institute of Allergy and Infectious Diseases|[https://ror.org/043z4tv69](https://ror.org/043z4tv69)|\n|National Institute of Arthritis and Musculoskeletal and Skin Diseases|[https://ror.org/006zn3t30](https://ror.org/006zn3t30)|\n|National Institute of Biomedical Imaging and Bioengineering|[https://ror.org/00372qc85](https://ror.org/00372qc85)|\n|National Institute of Dental and Craniofacial Research|[https://ror.org/004a2wv92](https://ror.org/004a2wv92)|\n|National Institute of Diabetes and Digestive and Kidney Diseases|[https://ror.org/00adh9b73](https://ror.org/00adh9b73)|\n|National Institute of Environmental Health Sciences|[https://ror.org/00j4k1h63](https://ror.org/00j4k1h63)|\n|National Institute of General Medical Sciences|[https://ror.org/04q48ey07](https://ror.org/04q48ey07)|\n|National Institute of Mental Health|[https://ror.org/04xeg9z08](https://ror.org/04xeg9z08)|\n|National Institute of Neurological Disorders and Stroke|[https://ror.org/01s5ya894](https://ror.org/01s5ya894)|\n|National Institute of Nursing Research|[https://ror.org/01y3zfr79](https://ror.org/01y3zfr79)|\n|National Institute on Aging|[https://ror.org/049v75w11](https://ror.org/049v75w11)|\n|National Institute on Alcohol Abuse and Alcoholism|[https://ror.org/02jzrsm59](https://ror.org/02jzrsm59)|\n|National Institute on Deafness and Other Communication Disorders|[https://ror.org/04mhx6838](https://ror.org/04mhx6838)|\n|National Institute on Drug Abuse|[https://ror.org/00fq5cm18](https://ror.org/00fq5cm18)|\n|National Institute on Minority Health and Health Disparities|[https://ror.org/0493hgw16](https://ror.org/0493hgw16)|\n|National Institutes of Health Clinical Center|[https://ror.org/04vfsmv21](https://ror.org/04vfsmv21)|\n|Office of the Director|[https://ror.org/00fj8a872](https://ror.org/00fj8a872)|\n|United States National Library of Medicine|[https://ror.org/0060t0j89](https://ror.org/0060t0j89)|",
            "Funder Identifier Scheme": "Name of the scheme or authority for the Funder Identifier. This field is optional as in most cases it can be determined from the _Funder Identifier_ field."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_funding_sources",
        "schema:name": "Data File Funding Sources",
        "schema:description": "A list of sources of funding that enabled and drove the creation of the data file. (Non-monetary sources are described under Contributor.) Each funding source may be described as a separate element (set of fields).",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Funding Sources",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "pav:createdBy": {
      "type": [
        "string",
        "null"
      ],
      "format": "uri"
    },
    "Data File Language": {
      "@type": "https://schema.metadatacenter.org/core/TemplateElement",
      "type": "object",
      "title": "Element(Data File Language)",
      "description": "Generated by CSV2CEDAR.",
      "properties": {
        "@context": {
          "properties": {
            "Primary Language": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/primaryLanguage"
              ]
            },
            "Other Languages": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/otherLanguage"
              ]
            }
          },
          "type": "object",
          "additionalProperties": false
        },
        "@id": {
          "format": "uri",
          "type": "string"
        },
        "@type": {
          "oneOf": [
            {
              "format": "uri",
              "type": "string"
            },
            {
              "items": {
                "format": "uri",
                "type": "string"
              },
              "uniqueItems": true,
              "minItems": 1,
              "type": "array"
            }
          ]
        },
        "Primary Language": {
          "@type": "https://schema.metadatacenter.org/core/TemplateField",
          "@id": "urn:uuid:6b46a8e9-016d-4f1c-b5a9-2efa9beb808d",
          "schema:identifier": "primary_language",
          "schema:name": "Primary Language",
          "schema:description": "Primary language used to present the data file (if multiple languages are present, the _Other Languages_ field may be used to add additional languages).",
          "pav:derivedFrom": "",
          "skos:prefLabel": "Primary Language",
          "skos:altLabel": [],
          "pav:version": "1.0.0",
          "bibo:status": "bibo:draft",
          "_valueConstraints": {
            "requiredValue": false,
            "multipleChoice": false,
            "classes": [],
            "branches": [],
            "ontologies": [],
            "literals": [
              {
                "label": "aa",
                "selectedByDefault": false
              },
              {
                "label": "ab",
                "selectedByDefault": false
              },
              {
                "label": "ae",
                "selectedByDefault": false
              },
              {
                "label": "af",
                "selectedByDefault": false
              },
              {
                "label": "ak",
                "selectedByDefault": false
              },
              {
                "label": "am",
                "selectedByDefault": false
              },
              {
                "label": "an",
                "selectedByDefault": false
              },
              {
                "label": "ar",
                "selectedByDefault": false
              },
              {
                "label": "ar-AE",
                "selectedByDefault": false
              },
              {
                "label": "ar-BH",
                "selectedByDefault": false
              },
              {
                "label": "ar-DZ",
                "selectedByDefault": false
              },
              {
                "label": "ar-EG",
                "selectedByDefault": false
              },
              {
                "label": "ar-IQ",
                "selectedByDefault": false
              },
              {
                "label": "ar-JO",
                "selectedByDefault": false
              },
              {
                "label": "ar-KW",
                "selectedByDefault": false
              },
              {
                "label": "ar-LB",
                "selectedByDefault": false
              },
              {
                "label": "ar-LY",
                "selectedByDefault": false
              },
              {
                "label": "ar-MA",
                "selectedByDefault": false
              },
              {
                "label": "ar-OM",
                "selectedByDefault": false
              },
              {
                "label": "ar-QA",
                "selectedByDefault": false
              },
              {
                "label": "ar-SA",
                "selectedByDefault": false
              },
              {
                "label": "ar-SY",
                "selectedByDefault": false
              },
              {
                "label": "ar-TN",
                "selectedByDefault": false
              },
              {
                "label": "ar-YE",
                "selectedByDefault": false
              },
              {
                "label": "as",
                "selectedByDefault": false
              },
              {
                "label": "av",
                "selectedByDefault": false
              },
              {
                "label": "ay",
                "selectedByDefault": false
              },
              {
                "label": "az",
                "selectedByDefault": false
              },
              {
                "label": "ba",
                "selectedByDefault": false
              },
              {
                "label": "be",
                "selectedByDefault": false
              },
              {
                "label": "bg",
                "selectedByDefault": false
              },
              {
                "label": "bh",
                "selectedByDefault": false
              },
              {
                "label": "bi",
                "selectedByDefault": false
              },
              {
                "label": "bm",
                "selectedByDefault": false
              },
              {
                "label": "bn",
                "selectedByDefault": false
              },
              {
                "label": "bo",
                "selectedByDefault": false
              },
              {
                "label": "br",
                "selectedByDefault": false
              },
              {
                "label": "bs",
                "selectedByDefault": false
              },
              {
                "label": "ca",
                "selectedByDefault": false
              },
              {
                "label": "ce",
                "selectedByDefault": false
              },
              {
                "label": "ch",
                "selectedByDefault": false
              },
              {
                "label": "co",
                "selectedByDefault": false
              },
              {
                "label": "cr",
                "selectedByDefault": false
              },
              {
                "label": "cs",
                "selectedByDefault": false
              },
              {
                "label": "cu",
                "selectedByDefault": false
              },
              {
                "label": "cv",
                "selectedByDefault": false
              },
              {
                "label": "cy",
                "selectedByDefault": false
              },
              {
                "label": "da",
                "selectedByDefault": false
              },
              {
                "label": "de",
                "selectedByDefault": false
              },
              {
                "label": "de-AT",
                "selectedByDefault": false
              },
              {
                "label": "de-CH",
                "selectedByDefault": false
              },
              {
                "label": "de-LI",
                "selectedByDefault": false
              },
              {
                "label": "de-LU",
                "selectedByDefault": false
              },
              {
                "label": "dv",
                "selectedByDefault": false
              },
              {
                "label": "dz",
                "selectedByDefault": false
              },
              {
                "label": "ee",
                "selectedByDefault": false
              },
              {
                "label": "el",
                "selectedByDefault": false
              },
              {
                "label": "en",
                "selectedByDefault": true
              },
              {
                "label": "en-AU",
                "selectedByDefault": false
              },
              {
                "label": "en-BZ",
                "selectedByDefault": false
              },
              {
                "label": "en-CA",
                "selectedByDefault": false
              },
              {
                "label": "en-GB",
                "selectedByDefault": false
              },
              {
                "label": "en-IE",
                "selectedByDefault": false
              },
              {
                "label": "en-JM",
                "selectedByDefault": false
              },
              {
                "label": "en-NZ",
                "selectedByDefault": false
              },
              {
                "label": "en-TT",
                "selectedByDefault": false
              },
              {
                "label": "en-US",
                "selectedByDefault": false
              },
              {
                "label": "en-ZA",
                "selectedByDefault": false
              },
              {
                "label": "eo",
                "selectedByDefault": false
              },
              {
                "label": "es",
                "selectedByDefault": false
              },
              {
                "label": "es-AR",
                "selectedByDefault": false
              },
              {
                "label": "es-BO",
                "selectedByDefault": false
              },
              {
                "label": "es-CL",
                "selectedByDefault": false
              },
              {
                "label": "es-CO",
                "selectedByDefault": false
              },
              {
                "label": "es-CR",
                "selectedByDefault": false
              },
              {
                "label": "es-DO",
                "selectedByDefault": false
              },
              {
                "label": "es-EC",
                "selectedByDefault": false
              },
              {
                "label": "es-GT",
                "selectedByDefault": false
              },
              {
                "label": "es-HN",
                "selectedByDefault": false
              },
              {
                "label": "es-MX",
                "selectedByDefault": false
              },
              {
                "label": "es-NI",
                "selectedByDefault": false
              },
              {
                "label": "es-PA",
                "selectedByDefault": false
              },
              {
                "label": "es-PE",
                "selectedByDefault": false
              },
              {
                "label": "es-PR",
                "selectedByDefault": false
              },
              {
                "label": "es-PY",
                "selectedByDefault": false
              },
              {
                "label": "es-SV",
                "selectedByDefault": false
              },
              {
                "label": "es-UY",
                "selectedByDefault": false
              },
              {
                "label": "es-VE",
                "selectedByDefault": false
              },
              {
                "label": "et",
                "selectedByDefault": false
              },
              {
                "label": "eu",
                "selectedByDefault": false
              },
              {
                "label": "fa",
                "selectedByDefault": false
              },
              {
                "label": "ff",
                "selectedByDefault": false
              },
              {
                "label": "fi",
                "selectedByDefault": false
              },
              {
                "label": "fj",
                "selectedByDefault": false
              },
              {
                "label": "fo",
                "selectedByDefault": false
              },
              {
                "label": "fr",
                "selectedByDefault": false
              },
              {
                "label": "fr-BE",
                "selectedByDefault": false
              },
              {
                "label": "fr-CA",
                "selectedByDefault": false
              },
              {
                "label": "fr-CH",
                "selectedByDefault": false
              },
              {
                "label": "fr-LU",
                "selectedByDefault": false
              },
              {
                "label": "fy",
                "selectedByDefault": false
              },
              {
                "label": "ga",
                "selectedByDefault": false
              },
              {
                "label": "gd",
                "selectedByDefault": false
              },
              {
                "label": "gl",
                "selectedByDefault": false
              },
              {
                "label": "gn",
                "selectedByDefault": false
              },
              {
                "label": "gu",
                "selectedByDefault": false
              },
              {
                "label": "gv",
                "selectedByDefault": false
              },
              {
                "label": "ha",
                "selectedByDefault": false
              },
              {
                "label": "he",
                "selectedByDefault": false
              },
              {
                "label": "hi",
                "selectedByDefault": false
              },
              {
                "label": "ho",
                "selectedByDefault": false
              },
              {
                "label": "hr",
                "selectedByDefault": false
              },
              {
                "label": "ht",
                "selectedByDefault": false
              },
              {
                "label": "hu",
                "selectedByDefault": false
              },
              {
                "label": "hy",
                "selectedByDefault": false
              },
              {
                "label": "hz",
                "selectedByDefault": false
              },
              {
                "label": "ia",
                "selectedByDefault": false
              },
              {
                "label": "id",
                "selectedByDefault": false
              },
              {
                "label": "ie",
                "selectedByDefault": false
              },
              {
                "label": "ig",
                "selectedByDefault": false
              },
              {
                "label": "ii",
                "selectedByDefault": false
              },
              {
                "label": "ik",
                "selectedByDefault": false
              },
              {
                "label": "io",
                "selectedByDefault": false
              },
              {
                "label": "is",
                "selectedByDefault": false
              },
              {
                "label": "it",
                "selectedByDefault": false
              },
              {
                "label": "it-CH",
                "selectedByDefault": false
              },
              {
                "label": "iu",
                "selectedByDefault": false
              },
              {
                "label": "ja",
                "selectedByDefault": false
              },
              {
                "label": "jv",
                "selectedByDefault": false
              },
              {
                "label": "ka",
                "selectedByDefault": false
              },
              {
                "label": "kg",
                "selectedByDefault": false
              },
              {
                "label": "ki",
                "selectedByDefault": false
              },
              {
                "label": "kj",
                "selectedByDefault": false
              },
              {
                "label": "kk",
                "selectedByDefault": false
              },
              {
                "label": "kl",
                "selectedByDefault": false
              },
              {
                "label": "km",
                "selectedByDefault": false
              },
              {
                "label": "kn",
                "selectedByDefault": false
              },
              {
                "label": "ko",
                "selectedByDefault": false
              },
              {
                "label": "kr",
                "selectedByDefault": false
              },
              {
                "label": "ks",
                "selectedByDefault": false
              },
              {
                "label": "ku",
                "selectedByDefault": false
              },
              {
                "label": "kv",
                "selectedByDefault": false
              },
              {
                "label": "kw",
                "selectedByDefault": false
              },
              {
                "label": "ky",
                "selectedByDefault": false
              },
              {
                "label": "la",
                "selectedByDefault": false
              },
              {
                "label": "lb",
                "selectedByDefault": false
              },
              {
                "label": "lg",
                "selectedByDefault": false
              },
              {
                "label": "li",
                "selectedByDefault": false
              },
              {
                "label": "ln",
                "selectedByDefault": false
              },
              {
                "label": "lo",
                "selectedByDefault": false
              },
              {
                "label": "lt",
                "selectedByDefault": false
              },
              {
                "label": "lu",
                "selectedByDefault": false
              },
              {
                "label": "lv",
                "selectedByDefault": false
              },
              {
                "label": "mg",
                "selectedByDefault": false
              },
              {
                "label": "mh",
                "selectedByDefault": false
              },
              {
                "label": "mi",
                "selectedByDefault": false
              },
              {
                "label": "mk",
                "selectedByDefault": false
              },
              {
                "label": "ml",
                "selectedByDefault": false
              },
              {
                "label": "mn",
                "selectedByDefault": false
              },
              {
                "label": "mr",
                "selectedByDefault": false
              },
              {
                "label": "ms",
                "selectedByDefault": false
              },
              {
                "label": "mt",
                "selectedByDefault": false
              },
              {
                "label": "my",
                "selectedByDefault": false
              },
              {
                "label": "na",
                "selectedByDefault": false
              },
              {
                "label": "nb",
                "selectedByDefault": false
              },
              {
                "label": "nd",
                "selectedByDefault": false
              },
              {
                "label": "ne",
                "selectedByDefault": false
              },
              {
                "label": "ng",
                "selectedByDefault": false
              },
              {
                "label": "nl",
                "selectedByDefault": false
              },
              {
                "label": "nl-BE",
                "selectedByDefault": false
              },
              {
                "label": "nn",
                "selectedByDefault": false
              },
              {
                "label": "no",
                "selectedByDefault": false
              },
              {
                "label": "nr",
                "selectedByDefault": false
              },
              {
                "label": "nv",
                "selectedByDefault": false
              },
              {
                "label": "ny",
                "selectedByDefault": false
              },
              {
                "label": "oc",
                "selectedByDefault": false
              },
              {
                "label": "oj",
                "selectedByDefault": false
              },
              {
                "label": "om",
                "selectedByDefault": false
              },
              {
                "label": "or",
                "selectedByDefault": false
              },
              {
                "label": "os",
                "selectedByDefault": false
              },
              {
                "label": "pa",
                "selectedByDefault": false
              },
              {
                "label": "pi",
                "selectedByDefault": false
              },
              {
                "label": "pl",
                "selectedByDefault": false
              },
              {
                "label": "ps",
                "selectedByDefault": false
              },
              {
                "label": "pt",
                "selectedByDefault": false
              },
              {
                "label": "pt-BR",
                "selectedByDefault": false
              },
              {
                "label": "qu",
                "selectedByDefault": false
              },
              {
                "label": "rm",
                "selectedByDefault": false
              },
              {
                "label": "rn",
                "selectedByDefault": false
              },
              {
                "label": "ro",
                "selectedByDefault": false
              },
              {
                "label": "ro-MD",
                "selectedByDefault": false
              },
              {
                "label": "ru",
                "selectedByDefault": false
              },
              {
                "label": "ru-MD",
                "selectedByDefault": false
              },
              {
                "label": "rw",
                "selectedByDefault": false
              },
              {
                "label": "sa",
                "selectedByDefault": false
              },
              {
                "label": "sc",
                "selectedByDefault": false
              },
              {
                "label": "sd",
                "selectedByDefault": false
              },
              {
                "label": "se",
                "selectedByDefault": false
              },
              {
                "label": "sg",
                "selectedByDefault": false
              },
              {
                "label": "si",
                "selectedByDefault": false
              },
              {
                "label": "sk",
                "selectedByDefault": false
              },
              {
                "label": "sl",
                "selectedByDefault": false
              },
              {
                "label": "sm",
                "selectedByDefault": false
              },
              {
                "label": "sn",
                "selectedByDefault": false
              },
              {
                "label": "so",
                "selectedByDefault": false
              },
              {
                "label": "sq",
                "selectedByDefault": false
              },
              {
                "label": "sr",
                "selectedByDefault": false
              },
              {
                "label": "ss",
                "selectedByDefault": false
              },
              {
                "label": "st",
                "selectedByDefault": false
              },
              {
                "label": "su",
                "selectedByDefault": false
              },
              {
                "label": "sv",
                "selectedByDefault": false
              },
              {
                "label": "sv-FI",
                "selectedByDefault": false
              },
              {
                "label": "sw",
                "selectedByDefault": false
              },
              {
                "label": "ta",
                "selectedByDefault": false
              },
              {
                "label": "te",
                "selectedByDefault": false
              },
              {
                "label": "tg",
                "selectedByDefault": false
              },
              {
                "label": "th",
                "selectedByDefault": false
              },
              {
                "label": "ti",
                "selectedByDefault": false
              },
              {
                "label": "tk",
                "selectedByDefault": false
              },
              {
                "label": "tl",
                "selectedByDefault": false
              },
              {
                "label": "tn",
                "selectedByDefault": false
              },
              {
                "label": "to",
                "selectedByDefault": false
              },
              {
                "label": "tr",
                "selectedByDefault": false
              },
              {
                "label": "ts",
                "selectedByDefault": false
              },
              {
                "label": "tt",
                "selectedByDefault": false
              },
              {
                "label": "tw",
                "selectedByDefault": false
              },
              {
                "label": "ty",
                "selectedByDefault": false
              },
              {
                "label": "ug",
                "selectedByDefault": false
              },
              {
                "label": "uk",
                "selectedByDefault": false
              },
              {
                "label": "ur",
                "selectedByDefault": false
              },
              {
                "label": "uz",
                "selectedByDefault": false
              },
              {
                "label": "ve",
                "selectedByDefault": false
              },
              {
                "label": "vi",
                "selectedByDefault": false
              },
              {
                "label": "vo",
                "selectedByDefault": false
              },
              {
                "label": "wa",
                "selectedByDefault": false
              },
              {
                "label": "wo",
                "selectedByDefault": false
              },
              {
                "label": "xh",
                "selectedByDefault": false
              },
              {
                "label": "yi",
                "selectedByDefault": false
              },
              {
                "label": "yo",
                "selectedByDefault": false
              },
              {
                "label": "za",
                "selectedByDefault": false
              },
              {
                "label": "zh",
                "selectedByDefault": false
              },
              {
                "label": "zh-CN",
                "selectedByDefault": false
              },
              {
                "label": "zh-HK",
                "selectedByDefault": false
              },
              {
                "label": "zh-SG",
                "selectedByDefault": false
              },
              {
                "label": "zh-TW",
                "selectedByDefault": false
              },
              {
                "label": "zu",
                "selectedByDefault": false
              }
            ]
          },
          "_ui": {
            "inputType": "list"
          },
          "pav:createdOn": null,
          "pav:createdBy": null,
          "pav:lastUpdatedOn": null,
          "oslc:modifiedBy": null,
          "type": "object",
          "title": "Field(Primary Language)",
          "description": "Generated by CSV2CEDAR.",
          "properties": {
            "@type": {
              "oneOf": [
                {
                  "type": "string",
                  "format": "uri"
                },
                {
                  "type": "array",
                  "minItems": 1,
                  "items": {
                    "type": "string",
                    "format": "uri"
                  },
                  "uniqueItems": true
                }
              ]
            },
            "@value": {
              "type": [
                "string",
                "null"
              ]
            },
            "rdfs:label": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "additionalProperties": false,
          "schema:schemaVersion": "1.6.0",
          "@context": {
            "xsd": "http://www.w3.org/2001/XMLSchema#",
            "pav": "http://purl.org/pav/",
            "bibo": "http://purl.org/ontology/bibo/",
            "oslc": "http://open-services.net/ns/core#",
            "schema": "http://schema.org/",
            "skos": "http://www.w3.org/2004/02/skos/core#",
            "schema:name": {
              "@type": "xsd:string"
            },
            "schema:description": {
              "@type": "xsd:string"
            },
            "skos:prefLabel": {
              "@type": "xsd:string"
            },
            "skos:altLabel": {
              "@type": "xsd:string"
            },
            "pav:createdOn": {
              "@type": "xsd:dateTime"
            },
            "pav:createdBy": {
              "@type": "@id"
            },
            "pav:lastUpdatedOn": {
              "@type": "xsd:dateTime"
            },
            "oslc:modifiedBy": {
              "@type": "@id"
            }
          },
          "$schema": "http://json-schema.org/draft-04/schema#"
        },
        "Other Languages": {
          "type": "array",
          "minItems": 0,
          "items": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:e87b430f-a48a-4df6-bc1c-7a847e8114f1",
            "schema:identifier": "other_languages",
            "schema:name": "Other Languages",
            "schema:description": "A list of other, non-primary, languages in which the data file being described is provided.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Other Languages",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [],
              "ontologies": [],
              "literals": [
                {
                  "label": "aa",
                  "selectedByDefault": false
                },
                {
                  "label": "ab",
                  "selectedByDefault": false
                },
                {
                  "label": "ae",
                  "selectedByDefault": false
                },
                {
                  "label": "af",
                  "selectedByDefault": false
                },
                {
                  "label": "ak",
                  "selectedByDefault": false
                },
                {
                  "label": "am",
                  "selectedByDefault": false
                },
                {
                  "label": "an",
                  "selectedByDefault": false
                },
                {
                  "label": "ar",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-AE",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-BH",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-DZ",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-EG",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-IQ",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-JO",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-KW",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-LB",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-LY",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-MA",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-OM",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-QA",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-SA",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-SY",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-TN",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-YE",
                  "selectedByDefault": false
                },
                {
                  "label": "as",
                  "selectedByDefault": false
                },
                {
                  "label": "av",
                  "selectedByDefault": false
                },
                {
                  "label": "ay",
                  "selectedByDefault": false
                },
                {
                  "label": "az",
                  "selectedByDefault": false
                },
                {
                  "label": "ba",
                  "selectedByDefault": false
                },
                {
                  "label": "be",
                  "selectedByDefault": false
                },
                {
                  "label": "bg",
                  "selectedByDefault": false
                },
                {
                  "label": "bh",
                  "selectedByDefault": false
                },
                {
                  "label": "bi",
                  "selectedByDefault": false
                },
                {
                  "label": "bm",
                  "selectedByDefault": false
                },
                {
                  "label": "bn",
                  "selectedByDefault": false
                },
                {
                  "label": "bo",
                  "selectedByDefault": false
                },
                {
                  "label": "br",
                  "selectedByDefault": false
                },
                {
                  "label": "bs",
                  "selectedByDefault": false
                },
                {
                  "label": "ca",
                  "selectedByDefault": false
                },
                {
                  "label": "ce",
                  "selectedByDefault": false
                },
                {
                  "label": "ch",
                  "selectedByDefault": false
                },
                {
                  "label": "co",
                  "selectedByDefault": false
                },
                {
                  "label": "cr",
                  "selectedByDefault": false
                },
                {
                  "label": "cs",
                  "selectedByDefault": false
                },
                {
                  "label": "cu",
                  "selectedByDefault": false
                },
                {
                  "label": "cv",
                  "selectedByDefault": false
                },
                {
                  "label": "cy",
                  "selectedByDefault": false
                },
                {
                  "label": "da",
                  "selectedByDefault": false
                },
                {
                  "label": "de",
                  "selectedByDefault": false
                },
                {
                  "label": "de-AT",
                  "selectedByDefault": false
                },
                {
                  "label": "de-CH",
                  "selectedByDefault": false
                },
                {
                  "label": "de-LI",
                  "selectedByDefault": false
                },
                {
                  "label": "de-LU",
                  "selectedByDefault": false
                },
                {
                  "label": "dv",
                  "selectedByDefault": false
                },
                {
                  "label": "dz",
                  "selectedByDefault": false
                },
                {
                  "label": "ee",
                  "selectedByDefault": false
                },
                {
                  "label": "el",
                  "selectedByDefault": false
                },
                {
                  "label": "en",
                  "selectedByDefault": false
                },
                {
                  "label": "en-AU",
                  "selectedByDefault": false
                },
                {
                  "label": "en-BZ",
                  "selectedByDefault": false
                },
                {
                  "label": "en-CA",
                  "selectedByDefault": false
                },
                {
                  "label": "en-GB",
                  "selectedByDefault": false
                },
                {
                  "label": "en-IE",
                  "selectedByDefault": false
                },
                {
                  "label": "en-JM",
                  "selectedByDefault": false
                },
                {
                  "label": "en-NZ",
                  "selectedByDefault": false
                },
                {
                  "label": "en-TT",
                  "selectedByDefault": false
                },
                {
                  "label": "en-US",
                  "selectedByDefault": false
                },
                {
                  "label": "en-ZA",
                  "selectedByDefault": false
                },
                {
                  "label": "eo",
                  "selectedByDefault": false
                },
                {
                  "label": "es",
                  "selectedByDefault": false
                },
                {
                  "label": "es-AR",
                  "selectedByDefault": false
                },
                {
                  "label": "es-BO",
                  "selectedByDefault": false
                },
                {
                  "label": "es-CL",
                  "selectedByDefault": false
                },
                {
                  "label": "es-CO",
                  "selectedByDefault": false
                },
                {
                  "label": "es-CR",
                  "selectedByDefault": false
                },
                {
                  "label": "es-DO",
                  "selectedByDefault": false
                },
                {
                  "label": "es-EC",
                  "selectedByDefault": false
                },
                {
                  "label": "es-GT",
                  "selectedByDefault": false
                },
                {
                  "label": "es-HN",
                  "selectedByDefault": false
                },
                {
                  "label": "es-MX",
                  "selectedByDefault": false
                },
                {
                  "label": "es-NI",
                  "selectedByDefault": false
                },
                {
                  "label": "es-PA",
                  "selectedByDefault": false
                },
                {
                  "label": "es-PE",
                  "selectedByDefault": false
                },
                {
                  "label": "es-PR",
                  "selectedByDefault": false
                },
                {
                  "label": "es-PY",
                  "selectedByDefault": false
                },
                {
                  "label": "es-SV",
                  "selectedByDefault": false
                },
                {
                  "label": "es-UY",
                  "selectedByDefault": false
                },
                {
                  "label": "es-VE",
                  "selectedByDefault": false
                },
                {
                  "label": "et",
                  "selectedByDefault": false
                },
                {
                  "label": "eu",
                  "selectedByDefault": false
                },
                {
                  "label": "fa",
                  "selectedByDefault": false
                },
                {
                  "label": "ff",
                  "selectedByDefault": false
                },
                {
                  "label": "fi",
                  "selectedByDefault": false
                },
                {
                  "label": "fj",
                  "selectedByDefault": false
                },
                {
                  "label": "fo",
                  "selectedByDefault": false
                },
                {
                  "label": "fr",
                  "selectedByDefault": false
                },
                {
                  "label": "fr-BE",
                  "selectedByDefault": false
                },
                {
                  "label": "fr-CA",
                  "selectedByDefault": false
                },
                {
                  "label": "fr-CH",
                  "selectedByDefault": false
                },
                {
                  "label": "fr-LU",
                  "selectedByDefault": false
                },
                {
                  "label": "fy",
                  "selectedByDefault": false
                },
                {
                  "label": "ga",
                  "selectedByDefault": false
                },
                {
                  "label": "gd",
                  "selectedByDefault": false
                },
                {
                  "label": "gl",
                  "selectedByDefault": false
                },
                {
                  "label": "gn",
                  "selectedByDefault": false
                },
                {
                  "label": "gu",
                  "selectedByDefault": false
                },
                {
                  "label": "gv",
                  "selectedByDefault": false
                },
                {
                  "label": "ha",
                  "selectedByDefault": false
                },
                {
                  "label": "he",
                  "selectedByDefault": false
                },
                {
                  "label": "hi",
                  "selectedByDefault": false
                },
                {
                  "label": "ho",
                  "selectedByDefault": false
                },
                {
                  "label": "hr",
                  "selectedByDefault": false
                },
                {
                  "label": "ht",
                  "selectedByDefault": false
                },
                {
                  "label": "hu",
                  "selectedByDefault": false
                },
                {
                  "label": "hy",
                  "selectedByDefault": false
                },
                {
                  "label": "hz",
                  "selectedByDefault": false
                },
                {
                  "label": "ia",
                  "selectedByDefault": false
                },
                {
                  "label": "id",
                  "selectedByDefault": false
                },
                {
                  "label": "ie",
                  "selectedByDefault": false
                },
                {
                  "label": "ig",
                  "selectedByDefault": false
                },
                {
                  "label": "ii",
                  "selectedByDefault": false
                },
                {
                  "label": "ik",
                  "selectedByDefault": false
                },
                {
                  "label": "io",
                  "selectedByDefault": false
                },
                {
                  "label": "is",
                  "selectedByDefault": false
                },
                {
                  "label": "it",
                  "selectedByDefault": false
                },
                {
                  "label": "it-CH",
                  "selectedByDefault": false
                },
                {
                  "label": "iu",
                  "selectedByDefault": false
                },
                {
                  "label": "ja",
                  "selectedByDefault": false
                },
                {
                  "label": "jv",
                  "selectedByDefault": false
                },
                {
                  "label": "ka",
                  "selectedByDefault": false
                },
                {
                  "label": "kg",
                  "selectedByDefault": false
                },
                {
                  "label": "ki",
                  "selectedByDefault": false
                },
                {
                  "label": "kj",
                  "selectedByDefault": false
                },
                {
                  "label": "kk",
                  "selectedByDefault": false
                },
                {
                  "label": "kl",
                  "selectedByDefault": false
                },
                {
                  "label": "km",
                  "selectedByDefault": false
                },
                {
                  "label": "kn",
                  "selectedByDefault": false
                },
                {
                  "label": "ko",
                  "selectedByDefault": false
                },
                {
                  "label": "kr",
                  "selectedByDefault": false
                },
                {
                  "label": "ks",
                  "selectedByDefault": false
                },
                {
                  "label": "ku",
                  "selectedByDefault": false
                },
                {
                  "label": "kv",
                  "selectedByDefault": false
                },
                {
                  "label": "kw",
                  "selectedByDefault": false
                },
                {
                  "label": "ky",
                  "selectedByDefault": false
                },
                {
                  "label": "la",
                  "selectedByDefault": false
                },
                {
                  "label": "lb",
                  "selectedByDefault": false
                },
                {
                  "label": "lg",
                  "selectedByDefault": false
                },
                {
                  "label": "li",
                  "selectedByDefault": false
                },
                {
                  "label": "ln",
                  "selectedByDefault": false
                },
                {
                  "label": "lo",
                  "selectedByDefault": false
                },
                {
                  "label": "lt",
                  "selectedByDefault": false
                },
                {
                  "label": "lu",
                  "selectedByDefault": false
                },
                {
                  "label": "lv",
                  "selectedByDefault": false
                },
                {
                  "label": "mg",
                  "selectedByDefault": false
                },
                {
                  "label": "mh",
                  "selectedByDefault": false
                },
                {
                  "label": "mi",
                  "selectedByDefault": false
                },
                {
                  "label": "mk",
                  "selectedByDefault": false
                },
                {
                  "label": "ml",
                  "selectedByDefault": false
                },
                {
                  "label": "mn",
                  "selectedByDefault": false
                },
                {
                  "label": "mr",
                  "selectedByDefault": false
                },
                {
                  "label": "ms",
                  "selectedByDefault": false
                },
                {
                  "label": "mt",
                  "selectedByDefault": false
                },
                {
                  "label": "my",
                  "selectedByDefault": false
                },
                {
                  "label": "na",
                  "selectedByDefault": false
                },
                {
                  "label": "nb",
                  "selectedByDefault": false
                },
                {
                  "label": "nd",
                  "selectedByDefault": false
                },
                {
                  "label": "ne",
                  "selectedByDefault": false
                },
                {
                  "label": "ng",
                  "selectedByDefault": false
                },
                {
                  "label": "nl",
                  "selectedByDefault": false
                },
                {
                  "label": "nl-BE",
                  "selectedByDefault": false
                },
                {
                  "label": "nn",
                  "selectedByDefault": false
                },
                {
                  "label": "no",
                  "selectedByDefault": false
                },
                {
                  "label": "nr",
                  "selectedByDefault": false
                },
                {
                  "label": "nv",
                  "selectedByDefault": false
                },
                {
                  "label": "ny",
                  "selectedByDefault": false
                },
                {
                  "label": "oc",
                  "selectedByDefault": false
                },
                {
                  "label": "oj",
                  "selectedByDefault": false
                },
                {
                  "label": "om",
                  "selectedByDefault": false
                },
                {
                  "label": "or",
                  "selectedByDefault": false
                },
                {
                  "label": "os",
                  "selectedByDefault": false
                },
                {
                  "label": "pa",
                  "selectedByDefault": false
                },
                {
                  "label": "pi",
                  "selectedByDefault": false
                },
                {
                  "label": "pl",
                  "selectedByDefault": false
                },
                {
                  "label": "ps",
                  "selectedByDefault": false
                },
                {
                  "label": "pt",
                  "selectedByDefault": false
                },
                {
                  "label": "pt-BR",
                  "selectedByDefault": false
                },
                {
                  "label": "qu",
                  "selectedByDefault": false
                },
                {
                  "label": "rm",
                  "selectedByDefault": false
                },
                {
                  "label": "rn",
                  "selectedByDefault": false
                },
                {
                  "label": "ro",
                  "selectedByDefault": false
                },
                {
                  "label": "ro-MD",
                  "selectedByDefault": false
                },
                {
                  "label": "ru",
                  "selectedByDefault": false
                },
                {
                  "label": "ru-MD",
                  "selectedByDefault": false
                },
                {
                  "label": "rw",
                  "selectedByDefault": false
                },
                {
                  "label": "sa",
                  "selectedByDefault": false
                },
                {
                  "label": "sc",
                  "selectedByDefault": false
                },
                {
                  "label": "sd",
                  "selectedByDefault": false
                },
                {
                  "label": "se",
                  "selectedByDefault": false
                },
                {
                  "label": "sg",
                  "selectedByDefault": false
                },
                {
                  "label": "si",
                  "selectedByDefault": false
                },
                {
                  "label": "sk",
                  "selectedByDefault": false
                },
                {
                  "label": "sl",
                  "selectedByDefault": false
                },
                {
                  "label": "sm",
                  "selectedByDefault": false
                },
                {
                  "label": "sn",
                  "selectedByDefault": false
                },
                {
                  "label": "so",
                  "selectedByDefault": false
                },
                {
                  "label": "sq",
                  "selectedByDefault": false
                },
                {
                  "label": "sr",
                  "selectedByDefault": false
                },
                {
                  "label": "ss",
                  "selectedByDefault": false
                },
                {
                  "label": "st",
                  "selectedByDefault": false
                },
                {
                  "label": "su",
                  "selectedByDefault": false
                },
                {
                  "label": "sv",
                  "selectedByDefault": false
                },
                {
                  "label": "sv-FI",
                  "selectedByDefault": false
                },
                {
                  "label": "sw",
                  "selectedByDefault": false
                },
                {
                  "label": "ta",
                  "selectedByDefault": false
                },
                {
                  "label": "te",
                  "selectedByDefault": false
                },
                {
                  "label": "tg",
                  "selectedByDefault": false
                },
                {
                  "label": "th",
                  "selectedByDefault": false
                },
                {
                  "label": "ti",
                  "selectedByDefault": false
                },
                {
                  "label": "tk",
                  "selectedByDefault": false
                },
                {
                  "label": "tl",
                  "selectedByDefault": false
                },
                {
                  "label": "tn",
                  "selectedByDefault": false
                },
                {
                  "label": "to",
                  "selectedByDefault": false
                },
                {
                  "label": "tr",
                  "selectedByDefault": false
                },
                {
                  "label": "ts",
                  "selectedByDefault": false
                },
                {
                  "label": "tt",
                  "selectedByDefault": false
                },
                {
                  "label": "tw",
                  "selectedByDefault": false
                },
                {
                  "label": "ty",
                  "selectedByDefault": false
                },
                {
                  "label": "ug",
                  "selectedByDefault": false
                },
                {
                  "label": "uk",
                  "selectedByDefault": false
                },
                {
                  "label": "ur",
                  "selectedByDefault": false
                },
                {
                  "label": "uz",
                  "selectedByDefault": false
                },
                {
                  "label": "ve",
                  "selectedByDefault": false
                },
                {
                  "label": "vi",
                  "selectedByDefault": false
                },
                {
                  "label": "vo",
                  "selectedByDefault": false
                },
                {
                  "label": "wa",
                  "selectedByDefault": false
                },
                {
                  "label": "wo",
                  "selectedByDefault": false
                },
                {
                  "label": "xh",
                  "selectedByDefault": false
                },
                {
                  "label": "yi",
                  "selectedByDefault": false
                },
                {
                  "label": "yo",
                  "selectedByDefault": false
                },
                {
                  "label": "za",
                  "selectedByDefault": false
                },
                {
                  "label": "zh",
                  "selectedByDefault": false
                },
                {
                  "label": "zh-CN",
                  "selectedByDefault": false
                },
                {
                  "label": "zh-HK",
                  "selectedByDefault": false
                },
                {
                  "label": "zh-SG",
                  "selectedByDefault": false
                },
                {
                  "label": "zh-TW",
                  "selectedByDefault": false
                },
                {
                  "label": "zu",
                  "selectedByDefault": false
                }
              ]
            },
            "_ui": {
              "inputType": "list"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Other Languages)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        }
      },
      "multiValued": false,
      "required": [
        "@context",
        "@id",
        "Primary Language",
        "Other Languages"
      ],
      "additionalProperties": false,
      "schema:schemaVersion": "1.6.0",
      "@id": "http://example.org/ad40c899-1a97-42de-9fe9-169a6f594259",
      "_ui": {
        "order": [
          "Primary Language",
          "Other Languages"
        ],
        "propertyLabels": {
          "Primary Language": "Primary Language",
          "Other Languages": "Other Languages"
        },
        "propertyDescriptions": {
          "Primary Language": "Primary language used to present the data file (if multiple languages are present, the _Other Languages_ field may be used to add additional languages).",
          "Other Languages": "A list of other, non-primary, languages in which the data file being described is provided."
        }
      },
      "@context": {
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "pav": "http://purl.org/pav/",
        "bibo": "http://purl.org/ontology/bibo/",
        "oslc": "http://open-services.net/ns/core#",
        "schema": "http://schema.org/",
        "schema:name": {
          "@type": "xsd:string"
        },
        "schema:description": {
          "@type": "xsd:string"
        },
        "pav:createdOn": {
          "@type": "xsd:dateTime"
        },
        "pav:createdBy": {
          "@type": "@id"
        },
        "pav:lastUpdatedOn": {
          "@type": "xsd:dateTime"
        },
        "oslc:modifiedBy": {
          "@type": "@id"
        }
      },
      "schema:identifier": "data_file_language",
      "schema:name": "Data File Language",
      "schema:description": "Language in which the data file being described is provided.",
      "pav:derivedFrom": "",
      "skos:prefLabel": "Data File Language",
      "skos:altLabel": [],
      "pav:version": "1.0.0",
      "bibo:status": "bibo:draft",
      "pav:createdOn": "2023-09-28T12:06:59-07:00",
      "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
      "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
      "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
      "$schema": "http://json-schema.org/draft-04/schema#"
    },
    "Data File Subjects": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Subjects)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Subject Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/subjectIdentifier"
                ]
              },
              "Subject Identifier Scheme": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/subjectIdentifierScheme"
                ]
              },
              "Keyword": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/keyword"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Keyword": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:e53edf46-f2bd-4097-8fc4-7a77c8d616ee",
            "schema:identifier": "keyword",
            "schema:name": "Keyword",
            "schema:description": "Free text subject, keyword, classification code, or key phrase describing the data file or purpose for which the data file can be used. While MeSH codes are the preferred form of specifying subjects this free text field may be used for codes or subject keywords that do not have a corresponding MeSH terms.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Keyword",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Keyword)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Subject Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:b2a6418f-a3b0-4853-a777-bb0dc6f16456",
            "schema:identifier": "subject_identifier",
            "schema:name": "Subject Identifier",
            "schema:description": "The Medical Subject Headings (MeSH) subject code that identifies a classification subject that is pertinent to the data file.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Subject Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [],
              "ontologies": [
                {
                  "uri": "https://bioportal.bioontology.org/ontologies/MESH",
                  "acronym": "MESH",
                  "name": "MESH"
                }
              ],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Subject Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Subject Identifier Scheme": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:89a7b763-7a1e-4598-a106-5ced45707931",
            "schema:identifier": "subject_identifier_scheme",
            "schema:name": "Subject Identifier Scheme",
            "schema:description": "The name of the scheme or authority used for the Subject Identifier.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Subject Identifier Scheme",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "http://purl.bioontology.org/ontology/MESH",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield",
              "hidden": true
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Subject Identifier Scheme)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Subject Identifier",
          "Subject Identifier Scheme",
          "Keyword"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/2b45ec67-b18a-4ea9-a2e7-b1fb69fbb6ed",
        "_ui": {
          "order": [
            "Subject Identifier",
            "Subject Identifier Scheme",
            "Keyword"
          ],
          "propertyLabels": {
            "Subject Identifier": "Subject Identifier",
            "Subject Identifier Scheme": "Subject Identifier Scheme",
            "Keyword": "Keyword"
          },
          "propertyDescriptions": {
            "Subject Identifier": "The Medical Subject Headings (MeSH) subject code that identifies a classification subject that is pertinent to the data file.",
            "Subject Identifier Scheme": "The name of the scheme or authority used for the Subject Identifier.",
            "Keyword": "Free text subject, keyword, classification code, or key phrase describing the data file or purpose for which the data file can be used. While MeSH codes are the preferred form of specifying subjects this free text field may be used for codes or subject keywords that do not have a corresponding MeSH terms."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_subjects",
        "schema:name": "Data File Subjects",
        "schema:description": "A list of concepts (keywords, classification, or free text terms) that define the data file or purpose (subjects which can be addressed) using the data file.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Subjects",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "oslc:modifiedBy": {
      "type": [
        "string",
        "null"
      ],
      "format": "uri"
    },
    "Data File Parent Studies": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Parent Studies)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "PHS Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/parentStudyPhsIdentifier"
                ]
              },
              "Study Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/ParentStudyIdentifier"
                ]
              },
              "Study Identifier Scheme": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/parentStudyIdentifierScheme"
                ]
              },
              "Study Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/parentStudyName"
                ]
              },
              "Study Start Date": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/startDate"
                ]
              },
              "Study End Date": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/endDate"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Study Identifier Scheme": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:a77031a1-07b2-4f91-b3d1-0b79e51f2fe0",
            "schema:identifier": "study_identifier_scheme",
            "schema:name": "Study Identifier Scheme",
            "schema:description": "The name of the scheme or authority used for the Study Identifier.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Study Identifier Scheme",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierType",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Study Identifier Scheme)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Study End Date": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:6f135ee4-1e34-49cb-8ae1-a8305655444a",
            "schema:identifier": "study_end_date",
            "schema:name": "Study End Date",
            "schema:description": "The official end date for the study for which this data file was created. This date must be in the ISO-8601 format of yyyy-mm-dd. For example, 2022-10-05 specifies October 5, 2022.\n\nThis field is considered auxiliary information to the initially registered Study End Date. It will not update the registered information, but may trigger a verification that the registered End Date has not changed.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Study End Date",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "temporalType": "xsd:date",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "temporalGranularity": "day",
              "valueRecommendationEnabled": true,
              "inputType": "temporal"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Study End Date)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Study Start Date": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:6965388c-d237-489b-bebf-596ed98dd8ca",
            "schema:identifier": "study_start_date",
            "schema:name": "Study Start Date",
            "schema:description": "The official start date for the study for which this data file was created. This date must be in the ISO-8601 format of yyyy-mm-dd. For example, 2022-10-05 specifies October 5, 2022.\n\nThis field is considered auxiliary information to the initially registered Study Start Date. It will not update the registered information, but may trigger a verification that the registered Start Date has not changed.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Study Start Date",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "temporalType": "xsd:date",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "temporalGranularity": "day",
              "valueRecommendationEnabled": true,
              "inputType": "temporal"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Study Start Date)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Study Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:f8db1b66-4b09-4aa9-b428-cb1d44b4927d",
            "schema:identifier": "study_identifier",
            "schema:name": "Study Identifier",
            "schema:description": "Globally unique string that identifies the study for which this data file was created.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Study Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Study Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "PHS Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:65e62d63-b2c6-4bd6-a36f-833c6c78087b",
            "schema:identifier": "phs_identifier",
            "schema:name": "PHS Identifier",
            "schema:description": "The PHS number that identifies the study for which this data file was created.\n\nThis corresponds to the _local identifier_ in the DataCite standard. All RADx studies are required to have a PHS identifier; if you do not have one, please contact the Data Hub for information on filling out this field.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "PHS Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": true,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(PHS Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Study Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:53616476-f762-4461-8ed6-252c55fdb563",
            "schema:identifier": "study_name",
            "schema:name": "Study Name",
            "schema:description": "The name of the research study for which this data file was created.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Study Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Study Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "PHS Identifier",
          "Study Identifier",
          "Study Identifier Scheme",
          "Study Name",
          "Study Start Date",
          "Study End Date"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/e7f3e7e6-99a0-45a7-a47e-777512c86d3c",
        "_ui": {
          "order": [
            "PHS Identifier",
            "Study Identifier",
            "Study Identifier Scheme",
            "Study Name",
            "Study Start Date",
            "Study End Date"
          ],
          "propertyLabels": {
            "PHS Identifier": "PHS Identifier",
            "Study Identifier": "Study Identifier",
            "Study Identifier Scheme": "Study Identifier Scheme",
            "Study Name": "Study Name",
            "Study Start Date": "Study Start Date",
            "Study End Date": "Study End Date"
          },
          "propertyDescriptions": {
            "PHS Identifier": "The PHS number that identifies the study for which this data file was created.\n\nThis corresponds to the _local identifier_ in the DataCite standard. All RADx studies are required to have a PHS identifier; if you do not have one, please contact the Data Hub for information on filling out this field.",
            "Study Identifier": "Globally unique string that identifies the study for which this data file was created.",
            "Study Identifier Scheme": "The name of the scheme or authority used for the Study Identifier.",
            "Study Name": "The name of the research study for which this data file was created.",
            "Study Start Date": "The official start date for the study for which this data file was created. This date must be in the ISO-8601 format of yyyy-mm-dd. For example, 2022-10-05 specifies October 5, 2022.\n\nThis field is considered auxiliary information to the initially registered Study Start Date. It will not update the registered information, but may trigger a verification that the registered Start Date has not changed.",
            "Study End Date": "The official end date for the study for which this data file was created. This date must be in the ISO-8601 format of yyyy-mm-dd. For example, 2022-10-05 specifies October 5, 2022.\n\nThis field is considered auxiliary information to the initially registered Study End Date. It will not update the registered information, but may trigger a verification that the registered End Date has not changed."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_parent_studies",
        "schema:name": "Data File Parent Studies",
        "schema:description": "A list of research studies for which this data file was created.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Parent Studies",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "@id": {
      "type": [
        "string",
        "null"
      ],
      "format": "uri"
    },
    "Data File Titles": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Titles)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Title": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/title"
                ]
              },
              "Language": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/language"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Language": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:828c1541-138c-4f29-8343-3cf994960410",
            "schema:identifier": "language",
            "schema:name": "Language",
            "schema:description": "The language tag that identifies the language in which the Data File Title is provided. Languages are identified using codes that are structured in accordance with [RFC 5646](https://www.rfc-editor.org/rfc/rfc5646). If no value is specified then the default code of `en` for English is assumed.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Language",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [],
              "ontologies": [],
              "literals": [
                {
                  "label": "aa",
                  "selectedByDefault": false
                },
                {
                  "label": "ab",
                  "selectedByDefault": false
                },
                {
                  "label": "ae",
                  "selectedByDefault": false
                },
                {
                  "label": "af",
                  "selectedByDefault": false
                },
                {
                  "label": "ak",
                  "selectedByDefault": false
                },
                {
                  "label": "am",
                  "selectedByDefault": false
                },
                {
                  "label": "an",
                  "selectedByDefault": false
                },
                {
                  "label": "ar",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-AE",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-BH",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-DZ",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-EG",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-IQ",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-JO",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-KW",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-LB",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-LY",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-MA",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-OM",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-QA",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-SA",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-SY",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-TN",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-YE",
                  "selectedByDefault": false
                },
                {
                  "label": "as",
                  "selectedByDefault": false
                },
                {
                  "label": "av",
                  "selectedByDefault": false
                },
                {
                  "label": "ay",
                  "selectedByDefault": false
                },
                {
                  "label": "az",
                  "selectedByDefault": false
                },
                {
                  "label": "ba",
                  "selectedByDefault": false
                },
                {
                  "label": "be",
                  "selectedByDefault": false
                },
                {
                  "label": "bg",
                  "selectedByDefault": false
                },
                {
                  "label": "bh",
                  "selectedByDefault": false
                },
                {
                  "label": "bi",
                  "selectedByDefault": false
                },
                {
                  "label": "bm",
                  "selectedByDefault": false
                },
                {
                  "label": "bn",
                  "selectedByDefault": false
                },
                {
                  "label": "bo",
                  "selectedByDefault": false
                },
                {
                  "label": "br",
                  "selectedByDefault": false
                },
                {
                  "label": "bs",
                  "selectedByDefault": false
                },
                {
                  "label": "ca",
                  "selectedByDefault": false
                },
                {
                  "label": "ce",
                  "selectedByDefault": false
                },
                {
                  "label": "ch",
                  "selectedByDefault": false
                },
                {
                  "label": "co",
                  "selectedByDefault": false
                },
                {
                  "label": "cr",
                  "selectedByDefault": false
                },
                {
                  "label": "cs",
                  "selectedByDefault": false
                },
                {
                  "label": "cu",
                  "selectedByDefault": false
                },
                {
                  "label": "cv",
                  "selectedByDefault": false
                },
                {
                  "label": "cy",
                  "selectedByDefault": false
                },
                {
                  "label": "da",
                  "selectedByDefault": false
                },
                {
                  "label": "de",
                  "selectedByDefault": false
                },
                {
                  "label": "de-AT",
                  "selectedByDefault": false
                },
                {
                  "label": "de-CH",
                  "selectedByDefault": false
                },
                {
                  "label": "de-LI",
                  "selectedByDefault": false
                },
                {
                  "label": "de-LU",
                  "selectedByDefault": false
                },
                {
                  "label": "dv",
                  "selectedByDefault": false
                },
                {
                  "label": "dz",
                  "selectedByDefault": false
                },
                {
                  "label": "ee",
                  "selectedByDefault": false
                },
                {
                  "label": "el",
                  "selectedByDefault": false
                },
                {
                  "label": "en",
                  "selectedByDefault": true
                },
                {
                  "label": "en-AU",
                  "selectedByDefault": false
                },
                {
                  "label": "en-BZ",
                  "selectedByDefault": false
                },
                {
                  "label": "en-CA",
                  "selectedByDefault": false
                },
                {
                  "label": "en-GB",
                  "selectedByDefault": false
                },
                {
                  "label": "en-IE",
                  "selectedByDefault": false
                },
                {
                  "label": "en-JM",
                  "selectedByDefault": false
                },
                {
                  "label": "en-NZ",
                  "selectedByDefault": false
                },
                {
                  "label": "en-TT",
                  "selectedByDefault": false
                },
                {
                  "label": "en-US",
                  "selectedByDefault": false
                },
                {
                  "label": "en-ZA",
                  "selectedByDefault": false
                },
                {
                  "label": "eo",
                  "selectedByDefault": false
                },
                {
                  "label": "es",
                  "selectedByDefault": false
                },
                {
                  "label": "es-AR",
                  "selectedByDefault": false
                },
                {
                  "label": "es-BO",
                  "selectedByDefault": false
                },
                {
                  "label": "es-CL",
                  "selectedByDefault": false
                },
                {
                  "label": "es-CO",
                  "selectedByDefault": false
                },
                {
                  "label": "es-CR",
                  "selectedByDefault": false
                },
                {
                  "label": "es-DO",
                  "selectedByDefault": false
                },
                {
                  "label": "es-EC",
                  "selectedByDefault": false
                },
                {
                  "label": "es-GT",
                  "selectedByDefault": false
                },
                {
                  "label": "es-HN",
                  "selectedByDefault": false
                },
                {
                  "label": "es-MX",
                  "selectedByDefault": false
                },
                {
                  "label": "es-NI",
                  "selectedByDefault": false
                },
                {
                  "label": "es-PA",
                  "selectedByDefault": false
                },
                {
                  "label": "es-PE",
                  "selectedByDefault": false
                },
                {
                  "label": "es-PR",
                  "selectedByDefault": false
                },
                {
                  "label": "es-PY",
                  "selectedByDefault": false
                },
                {
                  "label": "es-SV",
                  "selectedByDefault": false
                },
                {
                  "label": "es-UY",
                  "selectedByDefault": false
                },
                {
                  "label": "es-VE",
                  "selectedByDefault": false
                },
                {
                  "label": "et",
                  "selectedByDefault": false
                },
                {
                  "label": "eu",
                  "selectedByDefault": false
                },
                {
                  "label": "fa",
                  "selectedByDefault": false
                },
                {
                  "label": "ff",
                  "selectedByDefault": false
                },
                {
                  "label": "fi",
                  "selectedByDefault": false
                },
                {
                  "label": "fj",
                  "selectedByDefault": false
                },
                {
                  "label": "fo",
                  "selectedByDefault": false
                },
                {
                  "label": "fr",
                  "selectedByDefault": false
                },
                {
                  "label": "fr-BE",
                  "selectedByDefault": false
                },
                {
                  "label": "fr-CA",
                  "selectedByDefault": false
                },
                {
                  "label": "fr-CH",
                  "selectedByDefault": false
                },
                {
                  "label": "fr-LU",
                  "selectedByDefault": false
                },
                {
                  "label": "fy",
                  "selectedByDefault": false
                },
                {
                  "label": "ga",
                  "selectedByDefault": false
                },
                {
                  "label": "gd",
                  "selectedByDefault": false
                },
                {
                  "label": "gl",
                  "selectedByDefault": false
                },
                {
                  "label": "gn",
                  "selectedByDefault": false
                },
                {
                  "label": "gu",
                  "selectedByDefault": false
                },
                {
                  "label": "gv",
                  "selectedByDefault": false
                },
                {
                  "label": "ha",
                  "selectedByDefault": false
                },
                {
                  "label": "he",
                  "selectedByDefault": false
                },
                {
                  "label": "hi",
                  "selectedByDefault": false
                },
                {
                  "label": "ho",
                  "selectedByDefault": false
                },
                {
                  "label": "hr",
                  "selectedByDefault": false
                },
                {
                  "label": "ht",
                  "selectedByDefault": false
                },
                {
                  "label": "hu",
                  "selectedByDefault": false
                },
                {
                  "label": "hy",
                  "selectedByDefault": false
                },
                {
                  "label": "hz",
                  "selectedByDefault": false
                },
                {
                  "label": "ia",
                  "selectedByDefault": false
                },
                {
                  "label": "id",
                  "selectedByDefault": false
                },
                {
                  "label": "ie",
                  "selectedByDefault": false
                },
                {
                  "label": "ig",
                  "selectedByDefault": false
                },
                {
                  "label": "ii",
                  "selectedByDefault": false
                },
                {
                  "label": "ik",
                  "selectedByDefault": false
                },
                {
                  "label": "io",
                  "selectedByDefault": false
                },
                {
                  "label": "is",
                  "selectedByDefault": false
                },
                {
                  "label": "it",
                  "selectedByDefault": false
                },
                {
                  "label": "it-CH",
                  "selectedByDefault": false
                },
                {
                  "label": "iu",
                  "selectedByDefault": false
                },
                {
                  "label": "ja",
                  "selectedByDefault": false
                },
                {
                  "label": "jv",
                  "selectedByDefault": false
                },
                {
                  "label": "ka",
                  "selectedByDefault": false
                },
                {
                  "label": "kg",
                  "selectedByDefault": false
                },
                {
                  "label": "ki",
                  "selectedByDefault": false
                },
                {
                  "label": "kj",
                  "selectedByDefault": false
                },
                {
                  "label": "kk",
                  "selectedByDefault": false
                },
                {
                  "label": "kl",
                  "selectedByDefault": false
                },
                {
                  "label": "km",
                  "selectedByDefault": false
                },
                {
                  "label": "kn",
                  "selectedByDefault": false
                },
                {
                  "label": "ko",
                  "selectedByDefault": false
                },
                {
                  "label": "kr",
                  "selectedByDefault": false
                },
                {
                  "label": "ks",
                  "selectedByDefault": false
                },
                {
                  "label": "ku",
                  "selectedByDefault": false
                },
                {
                  "label": "kv",
                  "selectedByDefault": false
                },
                {
                  "label": "kw",
                  "selectedByDefault": false
                },
                {
                  "label": "ky",
                  "selectedByDefault": false
                },
                {
                  "label": "la",
                  "selectedByDefault": false
                },
                {
                  "label": "lb",
                  "selectedByDefault": false
                },
                {
                  "label": "lg",
                  "selectedByDefault": false
                },
                {
                  "label": "li",
                  "selectedByDefault": false
                },
                {
                  "label": "ln",
                  "selectedByDefault": false
                },
                {
                  "label": "lo",
                  "selectedByDefault": false
                },
                {
                  "label": "lt",
                  "selectedByDefault": false
                },
                {
                  "label": "lu",
                  "selectedByDefault": false
                },
                {
                  "label": "lv",
                  "selectedByDefault": false
                },
                {
                  "label": "mg",
                  "selectedByDefault": false
                },
                {
                  "label": "mh",
                  "selectedByDefault": false
                },
                {
                  "label": "mi",
                  "selectedByDefault": false
                },
                {
                  "label": "mk",
                  "selectedByDefault": false
                },
                {
                  "label": "ml",
                  "selectedByDefault": false
                },
                {
                  "label": "mn",
                  "selectedByDefault": false
                },
                {
                  "label": "mr",
                  "selectedByDefault": false
                },
                {
                  "label": "ms",
                  "selectedByDefault": false
                },
                {
                  "label": "mt",
                  "selectedByDefault": false
                },
                {
                  "label": "my",
                  "selectedByDefault": false
                },
                {
                  "label": "na",
                  "selectedByDefault": false
                },
                {
                  "label": "nb",
                  "selectedByDefault": false
                },
                {
                  "label": "nd",
                  "selectedByDefault": false
                },
                {
                  "label": "ne",
                  "selectedByDefault": false
                },
                {
                  "label": "ng",
                  "selectedByDefault": false
                },
                {
                  "label": "nl",
                  "selectedByDefault": false
                },
                {
                  "label": "nl-BE",
                  "selectedByDefault": false
                },
                {
                  "label": "nn",
                  "selectedByDefault": false
                },
                {
                  "label": "no",
                  "selectedByDefault": false
                },
                {
                  "label": "nr",
                  "selectedByDefault": false
                },
                {
                  "label": "nv",
                  "selectedByDefault": false
                },
                {
                  "label": "ny",
                  "selectedByDefault": false
                },
                {
                  "label": "oc",
                  "selectedByDefault": false
                },
                {
                  "label": "oj",
                  "selectedByDefault": false
                },
                {
                  "label": "om",
                  "selectedByDefault": false
                },
                {
                  "label": "or",
                  "selectedByDefault": false
                },
                {
                  "label": "os",
                  "selectedByDefault": false
                },
                {
                  "label": "pa",
                  "selectedByDefault": false
                },
                {
                  "label": "pi",
                  "selectedByDefault": false
                },
                {
                  "label": "pl",
                  "selectedByDefault": false
                },
                {
                  "label": "ps",
                  "selectedByDefault": false
                },
                {
                  "label": "pt",
                  "selectedByDefault": false
                },
                {
                  "label": "pt-BR",
                  "selectedByDefault": false
                },
                {
                  "label": "qu",
                  "selectedByDefault": false
                },
                {
                  "label": "rm",
                  "selectedByDefault": false
                },
                {
                  "label": "rn",
                  "selectedByDefault": false
                },
                {
                  "label": "ro",
                  "selectedByDefault": false
                },
                {
                  "label": "ro-MD",
                  "selectedByDefault": false
                },
                {
                  "label": "ru",
                  "selectedByDefault": false
                },
                {
                  "label": "ru-MD",
                  "selectedByDefault": false
                },
                {
                  "label": "rw",
                  "selectedByDefault": false
                },
                {
                  "label": "sa",
                  "selectedByDefault": false
                },
                {
                  "label": "sc",
                  "selectedByDefault": false
                },
                {
                  "label": "sd",
                  "selectedByDefault": false
                },
                {
                  "label": "se",
                  "selectedByDefault": false
                },
                {
                  "label": "sg",
                  "selectedByDefault": false
                },
                {
                  "label": "si",
                  "selectedByDefault": false
                },
                {
                  "label": "sk",
                  "selectedByDefault": false
                },
                {
                  "label": "sl",
                  "selectedByDefault": false
                },
                {
                  "label": "sm",
                  "selectedByDefault": false
                },
                {
                  "label": "sn",
                  "selectedByDefault": false
                },
                {
                  "label": "so",
                  "selectedByDefault": false
                },
                {
                  "label": "sq",
                  "selectedByDefault": false
                },
                {
                  "label": "sr",
                  "selectedByDefault": false
                },
                {
                  "label": "ss",
                  "selectedByDefault": false
                },
                {
                  "label": "st",
                  "selectedByDefault": false
                },
                {
                  "label": "su",
                  "selectedByDefault": false
                },
                {
                  "label": "sv",
                  "selectedByDefault": false
                },
                {
                  "label": "sv-FI",
                  "selectedByDefault": false
                },
                {
                  "label": "sw",
                  "selectedByDefault": false
                },
                {
                  "label": "ta",
                  "selectedByDefault": false
                },
                {
                  "label": "te",
                  "selectedByDefault": false
                },
                {
                  "label": "tg",
                  "selectedByDefault": false
                },
                {
                  "label": "th",
                  "selectedByDefault": false
                },
                {
                  "label": "ti",
                  "selectedByDefault": false
                },
                {
                  "label": "tk",
                  "selectedByDefault": false
                },
                {
                  "label": "tl",
                  "selectedByDefault": false
                },
                {
                  "label": "tn",
                  "selectedByDefault": false
                },
                {
                  "label": "to",
                  "selectedByDefault": false
                },
                {
                  "label": "tr",
                  "selectedByDefault": false
                },
                {
                  "label": "ts",
                  "selectedByDefault": false
                },
                {
                  "label": "tt",
                  "selectedByDefault": false
                },
                {
                  "label": "tw",
                  "selectedByDefault": false
                },
                {
                  "label": "ty",
                  "selectedByDefault": false
                },
                {
                  "label": "ug",
                  "selectedByDefault": false
                },
                {
                  "label": "uk",
                  "selectedByDefault": false
                },
                {
                  "label": "ur",
                  "selectedByDefault": false
                },
                {
                  "label": "uz",
                  "selectedByDefault": false
                },
                {
                  "label": "ve",
                  "selectedByDefault": false
                },
                {
                  "label": "vi",
                  "selectedByDefault": false
                },
                {
                  "label": "vo",
                  "selectedByDefault": false
                },
                {
                  "label": "wa",
                  "selectedByDefault": false
                },
                {
                  "label": "wo",
                  "selectedByDefault": false
                },
                {
                  "label": "xh",
                  "selectedByDefault": false
                },
                {
                  "label": "yi",
                  "selectedByDefault": false
                },
                {
                  "label": "yo",
                  "selectedByDefault": false
                },
                {
                  "label": "za",
                  "selectedByDefault": false
                },
                {
                  "label": "zh",
                  "selectedByDefault": false
                },
                {
                  "label": "zh-CN",
                  "selectedByDefault": false
                },
                {
                  "label": "zh-HK",
                  "selectedByDefault": false
                },
                {
                  "label": "zh-SG",
                  "selectedByDefault": false
                },
                {
                  "label": "zh-TW",
                  "selectedByDefault": false
                },
                {
                  "label": "zu",
                  "selectedByDefault": false
                }
              ]
            },
            "_ui": {
              "inputType": "list"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Language)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Title": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:0267ca59-72af-4595-beb0-65ab7d6f81ca",
            "schema:identifier": "title",
            "schema:name": "Title",
            "schema:description": "A title or descriptive name by which the Data File being described is known. This is a presentation name (i.e. title case with appropriate spacing) and is typically different from the actual file name of the data file.\n\nMultiple titles and different languages may be specified by repeating this element. The language for a given title is specified with the Language field.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Title",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": true,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Title)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Title",
          "Language"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/ce0e3baa-33a2-4194-97ec-a971f0c3388c",
        "_ui": {
          "order": [
            "Title",
            "Language"
          ],
          "propertyLabels": {
            "Title": "Title",
            "Language": "Language"
          },
          "propertyDescriptions": {
            "Title": "A title or descriptive name by which the Data File being described is known. This is a presentation name (i.e. title case with appropriate spacing) and is typically different from the actual file name of the data file.\n\nMultiple titles and different languages may be specified by repeating this element. The language for a given title is specified with the Language field.",
            "Language": "The language tag that identifies the language in which the Data File Title is provided. Languages are identified using codes that are structured in accordance with [RFC 5646](https://www.rfc-editor.org/rfc/rfc5646). If no value is specified then the default code of `en` for English is assumed."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_titles",
        "schema:name": "Data File Titles",
        "schema:description": "A list of names or titles of the Data File being described. At least one Data File Title is required.  Mutliple values may be specified to provide titles in different languages.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Titles",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "Data File Elevation Coverage": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Elevation Coverage)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Vertical Extent Minimum Value": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/minElevation"
                ]
              },
              "Vertical Extent Maximum Value": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/maxElevation"
                ]
              },
              "Vertical Extent Datum": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/elevationReferenceFrame"
                ]
              },
              "Vertical Extent Datum IRI": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/elevationReferenceFrameIri"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Vertical Extent Minimum Value": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:5a2f0262-94ab-4e99-9a02-f61f02abd8f5",
            "schema:identifier": "vertical_extent_minimum_value",
            "schema:name": "Vertical Extent Minimum Value",
            "schema:description": "The minimum vertical extent of the data file collection, specified in meters. \n\nIn case of depth, this is the maximum depth of data file collection (that is, it is a negative number of greater absolute magnitude than the Vertical Extent Maximum Value if that is also a depth). ",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Vertical Extent Minimum Value",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "numberType": "xsd:float",
              "unitOfMeasure": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "numeric"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Vertical Extent Minimum Value)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Vertical Extent Datum": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:7c5875ad-b631-41d8-b826-67a3221c17d1",
            "schema:identifier": "vertical_extent_datum",
            "schema:name": "Vertical Extent Datum",
            "schema:description": "The name of the Datum (reference frame) used for the Vertical Extent values.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Vertical Extent Datum",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Vertical Extent Datum)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Vertical Extent Datum IRI": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:9164df53-ecba-4ec3-9071-54b38855a2a5",
            "schema:identifier": "vertical_extent_datum_iri",
            "schema:name": "Vertical Extent Datum IRI",
            "schema:description": "The IRI (Internationalized Resource Identifier) of the Datum (reference frame) used for the Vertical Extent values.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Vertical Extent Datum IRI",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "link"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Vertical Extent Datum IRI)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Vertical Extent Maximum Value": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:089069ac-0947-4ec6-a65c-8b2d88c98f82",
            "schema:identifier": "vertical_extent_maximum_value",
            "schema:name": "Vertical Extent Maximum Value",
            "schema:description": "The maximum vertical extent of the collected, specified in meters. \n\nIn case of depth, this is the minimum depth of data file collection (that is, it is a negative number of lesser absolute magnitude than the Vertical Extent Minimum Value). ",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Vertical Extent Maximum Value",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "numberType": "xsd:float",
              "unitOfMeasure": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "numeric"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Vertical Extent Maximum Value)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Vertical Extent Minimum Value",
          "Vertical Extent Maximum Value",
          "Vertical Extent Datum",
          "Vertical Extent Datum IRI"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/aaa9d45d-743f-4b60-b52e-f79c9e8a09ff",
        "_ui": {
          "order": [
            "Vertical Extent Minimum Value",
            "Vertical Extent Maximum Value",
            "Vertical Extent Datum",
            "Vertical Extent Datum IRI"
          ],
          "propertyLabels": {
            "Vertical Extent Minimum Value": "Vertical Extent Minimum Value",
            "Vertical Extent Maximum Value": "Vertical Extent Maximum Value",
            "Vertical Extent Datum": "Vertical Extent Datum",
            "Vertical Extent Datum IRI": "Vertical Extent Datum IRI"
          },
          "propertyDescriptions": {
            "Vertical Extent Minimum Value": "The minimum vertical extent of the data file collection, specified in meters. \n\nIn case of depth, this is the maximum depth of data file collection (that is, it is a negative number of greater absolute magnitude than the Vertical Extent Maximum Value if that is also a depth). ",
            "Vertical Extent Maximum Value": "The maximum vertical extent of the collected, specified in meters. \n\nIn case of depth, this is the minimum depth of data file collection (that is, it is a negative number of lesser absolute magnitude than the Vertical Extent Minimum Value). ",
            "Vertical Extent Datum": "The name of the Datum (reference frame) used for the Vertical Extent values.",
            "Vertical Extent Datum IRI": "The IRI (Internationalized Resource Identifier) of the Datum (reference frame) used for the Vertical Extent values."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_elevation_coverage",
        "schema:name": "Data File Elevation Coverage",
        "schema:description": "A list of elevation ranges encompassed by the data within the data file being described.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Elevation Coverage",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "Data File Related Resources": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Related Resources)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Related Resource Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/relatedResourceIdentifier"
                ]
              },
              "Related Resource Identifier Type": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/relatedResourceIdentifierType"
                ]
              },
              "Related Resource File Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/relatedResourceFileName"
                ]
              },
              "Related Resource Type Category": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/relatedResourceTypeCategory"
                ]
              },
              "Related Resource Relation": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/relatedResourceRelation"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Related Resource File Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:92bba2f4-947d-488b-b367-7bbc81a89f50",
            "schema:identifier": "related_resource_file_name",
            "schema:name": "Related Resource File Name",
            "schema:description": "The local name of the related resource file (given by the operating system or web service), or for non-digital resources, the local name used to refer to it.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Related Resource File Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Related Resource File Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Related Resource Identifier Type": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:58b230eb-dda5-4145-848b-e857e57134df",
            "schema:identifier": "related_resource_identifier_type",
            "schema:name": "Related Resource Identifier Type",
            "schema:description": "The identifier type used to identify the related resource.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Related Resource Identifier Type",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierType",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Related Resource Identifier Type)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Related Resource Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:38eeaee6-fea6-4352-acf5-c74f0646401a",
            "schema:identifier": "related_resource_identifier",
            "schema:name": "Related Resource Identifier",
            "schema:description": "A globally unique string that identifies a resource that is related to the data file being described. Typically this is an IRI representing a Web page, but it can be some other type of unique identifier that identifies any digital or non-digital resource.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Related Resource Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Related Resource Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Related Resource Type Category": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:12c73012-5d06-48bc-a7f2-5b3d36a80ce3",
            "schema:identifier": "related_resource_type_category",
            "schema:name": "Related Resource Type Category",
            "schema:description": "Categorical type of the resource being described. (Corresponds to DataCite's resourceTypeGeneral.) For publications about the Data File, choose Text; for any other related publications, choose Text. For the Data Dictionary, choose Other Resource. ",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Related Resource Type Category",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/ResourceTypeCategory",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Related Resource Type Category)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Related Resource Relation": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:2aee2b1c-bb7d-4e9e-9985-73ce3df565f2",
            "schema:identifier": "related_resource_relation",
            "schema:name": "Related Resource Relation",
            "schema:description": "Description of the relationship of the related resource to the Data File being described.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Related Resource Relation",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Related Resource Relation)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Related Resource Identifier",
          "Related Resource Identifier Type",
          "Related Resource File Name",
          "Related Resource Type Category",
          "Related Resource Relation"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/fd352031-6242-4089-bd4f-b4ad7c9df668",
        "_ui": {
          "order": [
            "Related Resource Identifier",
            "Related Resource Identifier Type",
            "Related Resource File Name",
            "Related Resource Type Category",
            "Related Resource Relation"
          ],
          "propertyLabels": {
            "Related Resource Identifier": "Related Resource Identifier",
            "Related Resource Identifier Type": "Related Resource Identifier Type",
            "Related Resource File Name": "Related Resource File Name",
            "Related Resource Type Category": "Related Resource Type Category",
            "Related Resource Relation": "Related Resource Relation"
          },
          "propertyDescriptions": {
            "Related Resource Identifier": "A globally unique string that identifies a resource that is related to the data file being described. Typically this is an IRI representing a Web page, but it can be some other type of unique identifier that identifies any digital or non-digital resource.",
            "Related Resource Identifier Type": "The identifier type used to identify the related resource.",
            "Related Resource File Name": "The local name of the related resource file (given by the operating system or web service), or for non-digital resources, the local name used to refer to it.",
            "Related Resource Type Category": "Categorical type of the resource being described. (Corresponds to DataCite's resourceTypeGeneral.) For publications about the Data File, choose Text; for any other related publications, choose Text. For the Data Dictionary, choose Other Resource. ",
            "Related Resource Relation": "Description of the relationship of the related resource to the Data File being described."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_related_resources",
        "schema:name": "Data File Related Resources",
        "schema:description": "A list of resources related to the Data File being described. Resources may be publications, manuals, depositories, web pages, or other entities that related to this data set and its creation and use.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Related Resources",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "Data File Descriptions": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Descriptions)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Description": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/description"
                ]
              },
              "Description Language": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/language"
                ]
              },
              "Type Of Content": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/typeOfContent"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Type Of Content": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:ad15a615-8704-4cde-835a-8d38d8fadf0c",
            "schema:identifier": "type_of_content",
            "schema:name": "Type Of Content",
            "schema:description": "This is the type of digital object being described, which for RADx Data Files is always [Dataset](http://vocab.fairdatacollective.org/gdmt/Dataset). ",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Type Of Content",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [
                {
                  "uri": "http://vocab.fairdatacollective.org/gdmt/Dataset",
                  "label": "Dataset",
                  "source": "ENUM",
                  "type": "OntologyClass",
                  "prefLabel": "Dataset"
                }
              ],
              "branches": [],
              "ontologies": [],
              "literals": [],
              "defaultValue": {
                "termUri": "http://vocab.fairdatacollective.org/gdmt/Dataset",
                "rdfs:label": "Dataset"
              }
            },
            "_ui": {
              "inputType": "textfield",
              "hidden": true
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Type Of Content)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Description": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:d5f3f32c-e816-44ff-bf7c-c954aedc43a8",
            "schema:identifier": "description",
            "schema:name": "Description",
            "schema:description": "An account of the resource contained in the Data File; may include but is not limited to: an abstract, a table of contents, a graphical representation, or a free-text account of the resource.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Description",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textarea"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Description)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Description Language": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:172dbe32-18af-496b-816a-007a939dc418",
            "schema:identifier": "description_language",
            "schema:name": "Description Language",
            "schema:description": "Language in which the Data File description is provided. The default value is `en` for English.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Description Language",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [],
              "ontologies": [],
              "literals": [
                {
                  "label": "aa",
                  "selectedByDefault": false
                },
                {
                  "label": "ab",
                  "selectedByDefault": false
                },
                {
                  "label": "ae",
                  "selectedByDefault": false
                },
                {
                  "label": "af",
                  "selectedByDefault": false
                },
                {
                  "label": "ak",
                  "selectedByDefault": false
                },
                {
                  "label": "am",
                  "selectedByDefault": false
                },
                {
                  "label": "an",
                  "selectedByDefault": false
                },
                {
                  "label": "ar",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-AE",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-BH",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-DZ",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-EG",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-IQ",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-JO",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-KW",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-LB",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-LY",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-MA",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-OM",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-QA",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-SA",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-SY",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-TN",
                  "selectedByDefault": false
                },
                {
                  "label": "ar-YE",
                  "selectedByDefault": false
                },
                {
                  "label": "as",
                  "selectedByDefault": false
                },
                {
                  "label": "av",
                  "selectedByDefault": false
                },
                {
                  "label": "ay",
                  "selectedByDefault": false
                },
                {
                  "label": "az",
                  "selectedByDefault": false
                },
                {
                  "label": "ba",
                  "selectedByDefault": false
                },
                {
                  "label": "be",
                  "selectedByDefault": false
                },
                {
                  "label": "bg",
                  "selectedByDefault": false
                },
                {
                  "label": "bh",
                  "selectedByDefault": false
                },
                {
                  "label": "bi",
                  "selectedByDefault": false
                },
                {
                  "label": "bm",
                  "selectedByDefault": false
                },
                {
                  "label": "bn",
                  "selectedByDefault": false
                },
                {
                  "label": "bo",
                  "selectedByDefault": false
                },
                {
                  "label": "br",
                  "selectedByDefault": false
                },
                {
                  "label": "bs",
                  "selectedByDefault": false
                },
                {
                  "label": "ca",
                  "selectedByDefault": false
                },
                {
                  "label": "ce",
                  "selectedByDefault": false
                },
                {
                  "label": "ch",
                  "selectedByDefault": false
                },
                {
                  "label": "co",
                  "selectedByDefault": false
                },
                {
                  "label": "cr",
                  "selectedByDefault": false
                },
                {
                  "label": "cs",
                  "selectedByDefault": false
                },
                {
                  "label": "cu",
                  "selectedByDefault": false
                },
                {
                  "label": "cv",
                  "selectedByDefault": false
                },
                {
                  "label": "cy",
                  "selectedByDefault": false
                },
                {
                  "label": "da",
                  "selectedByDefault": false
                },
                {
                  "label": "de",
                  "selectedByDefault": false
                },
                {
                  "label": "de-AT",
                  "selectedByDefault": false
                },
                {
                  "label": "de-CH",
                  "selectedByDefault": false
                },
                {
                  "label": "de-LI",
                  "selectedByDefault": false
                },
                {
                  "label": "de-LU",
                  "selectedByDefault": false
                },
                {
                  "label": "dv",
                  "selectedByDefault": false
                },
                {
                  "label": "dz",
                  "selectedByDefault": false
                },
                {
                  "label": "ee",
                  "selectedByDefault": false
                },
                {
                  "label": "el",
                  "selectedByDefault": false
                },
                {
                  "label": "en",
                  "selectedByDefault": true
                },
                {
                  "label": "en-AU",
                  "selectedByDefault": false
                },
                {
                  "label": "en-BZ",
                  "selectedByDefault": false
                },
                {
                  "label": "en-CA",
                  "selectedByDefault": false
                },
                {
                  "label": "en-GB",
                  "selectedByDefault": false
                },
                {
                  "label": "en-IE",
                  "selectedByDefault": false
                },
                {
                  "label": "en-JM",
                  "selectedByDefault": false
                },
                {
                  "label": "en-NZ",
                  "selectedByDefault": false
                },
                {
                  "label": "en-TT",
                  "selectedByDefault": false
                },
                {
                  "label": "en-US",
                  "selectedByDefault": false
                },
                {
                  "label": "en-ZA",
                  "selectedByDefault": false
                },
                {
                  "label": "eo",
                  "selectedByDefault": false
                },
                {
                  "label": "es",
                  "selectedByDefault": false
                },
                {
                  "label": "es-AR",
                  "selectedByDefault": false
                },
                {
                  "label": "es-BO",
                  "selectedByDefault": false
                },
                {
                  "label": "es-CL",
                  "selectedByDefault": false
                },
                {
                  "label": "es-CO",
                  "selectedByDefault": false
                },
                {
                  "label": "es-CR",
                  "selectedByDefault": false
                },
                {
                  "label": "es-DO",
                  "selectedByDefault": false
                },
                {
                  "label": "es-EC",
                  "selectedByDefault": false
                },
                {
                  "label": "es-GT",
                  "selectedByDefault": false
                },
                {
                  "label": "es-HN",
                  "selectedByDefault": false
                },
                {
                  "label": "es-MX",
                  "selectedByDefault": false
                },
                {
                  "label": "es-NI",
                  "selectedByDefault": false
                },
                {
                  "label": "es-PA",
                  "selectedByDefault": false
                },
                {
                  "label": "es-PE",
                  "selectedByDefault": false
                },
                {
                  "label": "es-PR",
                  "selectedByDefault": false
                },
                {
                  "label": "es-PY",
                  "selectedByDefault": false
                },
                {
                  "label": "es-SV",
                  "selectedByDefault": false
                },
                {
                  "label": "es-UY",
                  "selectedByDefault": false
                },
                {
                  "label": "es-VE",
                  "selectedByDefault": false
                },
                {
                  "label": "et",
                  "selectedByDefault": false
                },
                {
                  "label": "eu",
                  "selectedByDefault": false
                },
                {
                  "label": "fa",
                  "selectedByDefault": false
                },
                {
                  "label": "ff",
                  "selectedByDefault": false
                },
                {
                  "label": "fi",
                  "selectedByDefault": false
                },
                {
                  "label": "fj",
                  "selectedByDefault": false
                },
                {
                  "label": "fo",
                  "selectedByDefault": false
                },
                {
                  "label": "fr",
                  "selectedByDefault": false
                },
                {
                  "label": "fr-BE",
                  "selectedByDefault": false
                },
                {
                  "label": "fr-CA",
                  "selectedByDefault": false
                },
                {
                  "label": "fr-CH",
                  "selectedByDefault": false
                },
                {
                  "label": "fr-LU",
                  "selectedByDefault": false
                },
                {
                  "label": "fy",
                  "selectedByDefault": false
                },
                {
                  "label": "ga",
                  "selectedByDefault": false
                },
                {
                  "label": "gd",
                  "selectedByDefault": false
                },
                {
                  "label": "gl",
                  "selectedByDefault": false
                },
                {
                  "label": "gn",
                  "selectedByDefault": false
                },
                {
                  "label": "gu",
                  "selectedByDefault": false
                },
                {
                  "label": "gv",
                  "selectedByDefault": false
                },
                {
                  "label": "ha",
                  "selectedByDefault": false
                },
                {
                  "label": "he",
                  "selectedByDefault": false
                },
                {
                  "label": "hi",
                  "selectedByDefault": false
                },
                {
                  "label": "ho",
                  "selectedByDefault": false
                },
                {
                  "label": "hr",
                  "selectedByDefault": false
                },
                {
                  "label": "ht",
                  "selectedByDefault": false
                },
                {
                  "label": "hu",
                  "selectedByDefault": false
                },
                {
                  "label": "hy",
                  "selectedByDefault": false
                },
                {
                  "label": "hz",
                  "selectedByDefault": false
                },
                {
                  "label": "ia",
                  "selectedByDefault": false
                },
                {
                  "label": "id",
                  "selectedByDefault": false
                },
                {
                  "label": "ie",
                  "selectedByDefault": false
                },
                {
                  "label": "ig",
                  "selectedByDefault": false
                },
                {
                  "label": "ii",
                  "selectedByDefault": false
                },
                {
                  "label": "ik",
                  "selectedByDefault": false
                },
                {
                  "label": "io",
                  "selectedByDefault": false
                },
                {
                  "label": "is",
                  "selectedByDefault": false
                },
                {
                  "label": "it",
                  "selectedByDefault": false
                },
                {
                  "label": "it-CH",
                  "selectedByDefault": false
                },
                {
                  "label": "iu",
                  "selectedByDefault": false
                },
                {
                  "label": "ja",
                  "selectedByDefault": false
                },
                {
                  "label": "jv",
                  "selectedByDefault": false
                },
                {
                  "label": "ka",
                  "selectedByDefault": false
                },
                {
                  "label": "kg",
                  "selectedByDefault": false
                },
                {
                  "label": "ki",
                  "selectedByDefault": false
                },
                {
                  "label": "kj",
                  "selectedByDefault": false
                },
                {
                  "label": "kk",
                  "selectedByDefault": false
                },
                {
                  "label": "kl",
                  "selectedByDefault": false
                },
                {
                  "label": "km",
                  "selectedByDefault": false
                },
                {
                  "label": "kn",
                  "selectedByDefault": false
                },
                {
                  "label": "ko",
                  "selectedByDefault": false
                },
                {
                  "label": "kr",
                  "selectedByDefault": false
                },
                {
                  "label": "ks",
                  "selectedByDefault": false
                },
                {
                  "label": "ku",
                  "selectedByDefault": false
                },
                {
                  "label": "kv",
                  "selectedByDefault": false
                },
                {
                  "label": "kw",
                  "selectedByDefault": false
                },
                {
                  "label": "ky",
                  "selectedByDefault": false
                },
                {
                  "label": "la",
                  "selectedByDefault": false
                },
                {
                  "label": "lb",
                  "selectedByDefault": false
                },
                {
                  "label": "lg",
                  "selectedByDefault": false
                },
                {
                  "label": "li",
                  "selectedByDefault": false
                },
                {
                  "label": "ln",
                  "selectedByDefault": false
                },
                {
                  "label": "lo",
                  "selectedByDefault": false
                },
                {
                  "label": "lt",
                  "selectedByDefault": false
                },
                {
                  "label": "lu",
                  "selectedByDefault": false
                },
                {
                  "label": "lv",
                  "selectedByDefault": false
                },
                {
                  "label": "mg",
                  "selectedByDefault": false
                },
                {
                  "label": "mh",
                  "selectedByDefault": false
                },
                {
                  "label": "mi",
                  "selectedByDefault": false
                },
                {
                  "label": "mk",
                  "selectedByDefault": false
                },
                {
                  "label": "ml",
                  "selectedByDefault": false
                },
                {
                  "label": "mn",
                  "selectedByDefault": false
                },
                {
                  "label": "mr",
                  "selectedByDefault": false
                },
                {
                  "label": "ms",
                  "selectedByDefault": false
                },
                {
                  "label": "mt",
                  "selectedByDefault": false
                },
                {
                  "label": "my",
                  "selectedByDefault": false
                },
                {
                  "label": "na",
                  "selectedByDefault": false
                },
                {
                  "label": "nb",
                  "selectedByDefault": false
                },
                {
                  "label": "nd",
                  "selectedByDefault": false
                },
                {
                  "label": "ne",
                  "selectedByDefault": false
                },
                {
                  "label": "ng",
                  "selectedByDefault": false
                },
                {
                  "label": "nl",
                  "selectedByDefault": false
                },
                {
                  "label": "nl-BE",
                  "selectedByDefault": false
                },
                {
                  "label": "nn",
                  "selectedByDefault": false
                },
                {
                  "label": "no",
                  "selectedByDefault": false
                },
                {
                  "label": "nr",
                  "selectedByDefault": false
                },
                {
                  "label": "nv",
                  "selectedByDefault": false
                },
                {
                  "label": "ny",
                  "selectedByDefault": false
                },
                {
                  "label": "oc",
                  "selectedByDefault": false
                },
                {
                  "label": "oj",
                  "selectedByDefault": false
                },
                {
                  "label": "om",
                  "selectedByDefault": false
                },
                {
                  "label": "or",
                  "selectedByDefault": false
                },
                {
                  "label": "os",
                  "selectedByDefault": false
                },
                {
                  "label": "pa",
                  "selectedByDefault": false
                },
                {
                  "label": "pi",
                  "selectedByDefault": false
                },
                {
                  "label": "pl",
                  "selectedByDefault": false
                },
                {
                  "label": "ps",
                  "selectedByDefault": false
                },
                {
                  "label": "pt",
                  "selectedByDefault": false
                },
                {
                  "label": "pt-BR",
                  "selectedByDefault": false
                },
                {
                  "label": "qu",
                  "selectedByDefault": false
                },
                {
                  "label": "rm",
                  "selectedByDefault": false
                },
                {
                  "label": "rn",
                  "selectedByDefault": false
                },
                {
                  "label": "ro",
                  "selectedByDefault": false
                },
                {
                  "label": "ro-MD",
                  "selectedByDefault": false
                },
                {
                  "label": "ru",
                  "selectedByDefault": false
                },
                {
                  "label": "ru-MD",
                  "selectedByDefault": false
                },
                {
                  "label": "rw",
                  "selectedByDefault": false
                },
                {
                  "label": "sa",
                  "selectedByDefault": false
                },
                {
                  "label": "sc",
                  "selectedByDefault": false
                },
                {
                  "label": "sd",
                  "selectedByDefault": false
                },
                {
                  "label": "se",
                  "selectedByDefault": false
                },
                {
                  "label": "sg",
                  "selectedByDefault": false
                },
                {
                  "label": "si",
                  "selectedByDefault": false
                },
                {
                  "label": "sk",
                  "selectedByDefault": false
                },
                {
                  "label": "sl",
                  "selectedByDefault": false
                },
                {
                  "label": "sm",
                  "selectedByDefault": false
                },
                {
                  "label": "sn",
                  "selectedByDefault": false
                },
                {
                  "label": "so",
                  "selectedByDefault": false
                },
                {
                  "label": "sq",
                  "selectedByDefault": false
                },
                {
                  "label": "sr",
                  "selectedByDefault": false
                },
                {
                  "label": "ss",
                  "selectedByDefault": false
                },
                {
                  "label": "st",
                  "selectedByDefault": false
                },
                {
                  "label": "su",
                  "selectedByDefault": false
                },
                {
                  "label": "sv",
                  "selectedByDefault": false
                },
                {
                  "label": "sv-FI",
                  "selectedByDefault": false
                },
                {
                  "label": "sw",
                  "selectedByDefault": false
                },
                {
                  "label": "ta",
                  "selectedByDefault": false
                },
                {
                  "label": "te",
                  "selectedByDefault": false
                },
                {
                  "label": "tg",
                  "selectedByDefault": false
                },
                {
                  "label": "th",
                  "selectedByDefault": false
                },
                {
                  "label": "ti",
                  "selectedByDefault": false
                },
                {
                  "label": "tk",
                  "selectedByDefault": false
                },
                {
                  "label": "tl",
                  "selectedByDefault": false
                },
                {
                  "label": "tn",
                  "selectedByDefault": false
                },
                {
                  "label": "to",
                  "selectedByDefault": false
                },
                {
                  "label": "tr",
                  "selectedByDefault": false
                },
                {
                  "label": "ts",
                  "selectedByDefault": false
                },
                {
                  "label": "tt",
                  "selectedByDefault": false
                },
                {
                  "label": "tw",
                  "selectedByDefault": false
                },
                {
                  "label": "ty",
                  "selectedByDefault": false
                },
                {
                  "label": "ug",
                  "selectedByDefault": false
                },
                {
                  "label": "uk",
                  "selectedByDefault": false
                },
                {
                  "label": "ur",
                  "selectedByDefault": false
                },
                {
                  "label": "uz",
                  "selectedByDefault": false
                },
                {
                  "label": "ve",
                  "selectedByDefault": false
                },
                {
                  "label": "vi",
                  "selectedByDefault": false
                },
                {
                  "label": "vo",
                  "selectedByDefault": false
                },
                {
                  "label": "wa",
                  "selectedByDefault": false
                },
                {
                  "label": "wo",
                  "selectedByDefault": false
                },
                {
                  "label": "xh",
                  "selectedByDefault": false
                },
                {
                  "label": "yi",
                  "selectedByDefault": false
                },
                {
                  "label": "yo",
                  "selectedByDefault": false
                },
                {
                  "label": "za",
                  "selectedByDefault": false
                },
                {
                  "label": "zh",
                  "selectedByDefault": false
                },
                {
                  "label": "zh-CN",
                  "selectedByDefault": false
                },
                {
                  "label": "zh-HK",
                  "selectedByDefault": false
                },
                {
                  "label": "zh-SG",
                  "selectedByDefault": false
                },
                {
                  "label": "zh-TW",
                  "selectedByDefault": false
                },
                {
                  "label": "zu",
                  "selectedByDefault": false
                }
              ]
            },
            "_ui": {
              "inputType": "list"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Description Language)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Description",
          "Description Language",
          "Type Of Content"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/02fa450f-d0ff-44c2-810d-4da7c9b0c14f",
        "_ui": {
          "order": [
            "Description",
            "Description Language",
            "Type Of Content"
          ],
          "propertyLabels": {
            "Description": "Description",
            "Description Language": "Description Language",
            "Type Of Content": "Type Of Content"
          },
          "propertyDescriptions": {
            "Description": "An account of the resource contained in the Data File; may include but is not limited to: an abstract, a table of contents, a graphical representation, or a free-text account of the resource.",
            "Description Language": "Language in which the Data File description is provided. The default value is `en` for English.",
            "Type Of Content": "This is the type of digital object being described, which for RADx Data Files is always [Dataset](http://vocab.fairdatacollective.org/gdmt/Dataset). "
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_descriptions",
        "schema:name": "Data File Descriptions",
        "schema:description": "A list of summaries of the Data File and its contents.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Descriptions",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "Data File Rights": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Rights)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "License Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/licenseName"
                ]
              },
              "License Text": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/licenseText"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "License Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:756cd90f-9e77-4aa4-91ad-b50fe78976d5",
            "schema:identifier": "license_name",
            "schema:name": "License Name",
            "schema:description": "A standardized version of the license name.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "License Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/LicenseIdentifier",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(License Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "License Text": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:d4b946b4-05b3-4b1e-b68c-71a31a19179e",
            "schema:identifier": "license_text",
            "schema:name": "License Text",
            "schema:description": "Text string describing any rights information for the data file being described.\n\nIf a uniquely identiable license is named above, it is not necessary to repeat the text of the license in this field. This field allows additional rights information to be provided, either to expand licensing terms, clarify the license holder, or provide unique license terms that are not available in a standardized license.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "License Text",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(License Text)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "License Name",
          "License Text"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/9adde680-6eb7-4863-bb0f-638c78ad952f",
        "_ui": {
          "order": [
            "License Name",
            "License Text"
          ],
          "propertyLabels": {
            "License Name": "License Name",
            "License Text": "License Text"
          },
          "propertyDescriptions": {
            "License Name": "A standardized version of the license name.",
            "License Text": "Text string describing any rights information for the data file being described.\n\nIf a uniquely identiable license is named above, it is not necessary to repeat the text of the license in this field. This field allows additional rights information to be provided, either to expand licensing terms, clarify the license holder, or provide unique license terms that are not available in a standardized license."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_rights",
        "schema:name": "Data File Rights",
        "schema:description": "A list of ways in which the data file may or may not be accessed and used.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Rights",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "Data File Contributors": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Contributors)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Contributor Type": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/contributorType"
                ]
              },
              "Contributor Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/contributorName"
                ]
              },
              "Contributor Given Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/contributorGivenName"
                ]
              },
              "Contributor Family Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/contributorFamilyName"
                ]
              },
              "Contributor Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/contributorIdentifier"
                ]
              },
              "Contributor Identifier Scheme": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/contributorIdentifierScheme"
                ]
              },
              "Contributor Affiliation": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/contributorAffiliation"
                ]
              },
              "Contributor Affiliation Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/contributorAffiliationIdentifier"
                ]
              },
              "Contributor Affiliation Identifier Scheme": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/contributorAffiliationIdentifierScheme"
                ]
              },
              "Contributor Email": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/contributorEmail"
                ]
              },
              "Contributor Role": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/contributorRole"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Contributor Identifier Scheme": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:bc924ae0-900c-4698-93db-528277ba5aea",
            "schema:identifier": "contributor_identifier_scheme",
            "schema:name": "Contributor Identifier Scheme",
            "schema:description": "The name of the scheme or authority used for the Contributor Identifier.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Contributor Identifier Scheme",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierScheme",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Contributor Identifier Scheme)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Contributor Given Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:3e3fe2a3-9712-41ef-822e-d9708d85e673",
            "schema:identifier": "contributor_given_name",
            "schema:name": "Contributor Given Name",
            "schema:description": "If the contributor is a person, the personal name(s) of the contributor (e.g., first and optionally middle name in Western languagues, optionally middle and last name in Asian languages).",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Contributor Given Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Contributor Given Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Contributor Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:2192e704-7e03-4ae0-8727-ec1c2b0e20bf",
            "schema:identifier": "contributor_identifier",
            "schema:name": "Contributor Identifier",
            "schema:description": "Globally unique string that identifies the contributor (an individual or legal entity). For individuals, this is typically an ORCID; for research organizations, it is typically an ROR.\n\nThe ORCID iD is an https IRI with a 16-digit number that is compatible with the ISO Standard (ISO 27729), also known as the International Standard Name Identifier (ISNI), e.g. https://orcid.org/0000-0001-2345-6789 \n\n_[ORCID](https://orcid.org) provides a persistent digital identifier (an ORCID iD) that distinguishes each researcher from every other researcher. You can connect your iD with your professional information—affiliations, grants, publications, peer review, and more. You can use your iD to share your information with other systems, ensuring you get recognition for all your contributions, saving you time and hassle, and reducing the risk of errors._\n\nThe ROR is an https IRI that uniquely identifies most research organizatiions. \n\n_The [Research Organization Registry (ROR)](https://ror.org) is a community-led project to develop an open, sustainable, usable, and unique identifier for every research organization in the world._",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Contributor Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Contributor Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Contributor Affiliation": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:06e70d08-47dd-427f-8b0a-c341aa7fe149",
            "schema:identifier": "contributor_affiliation",
            "schema:name": "Contributor Affiliation",
            "schema:description": "If the contributor is a person, the organizational or institutional affiliation of the contributor.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Contributor Affiliation",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Contributor Affiliation)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Contributor Email": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:13ad94d1-d3ee-4f55-8abf-68237eab5803",
            "schema:identifier": "contributor_email",
            "schema:name": "Contributor Email",
            "schema:description": "An email address of the contributor.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Contributor Email",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "email"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Contributor Email)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Contributor Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:dace8d2f-75ff-45e8-b938-34c61979b02c",
            "schema:identifier": "contributor_name",
            "schema:name": "Contributor Name",
            "schema:description": "The full name of the contributor.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Contributor Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Contributor Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Contributor Type": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:ad092825-d00c-4a9b-9564-e4526c88af79",
            "schema:identifier": "contributor_type",
            "schema:name": "Contributor Type",
            "schema:description": "The type of the contributor of the described data file (person or organization).",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Contributor Type",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/ResourceCreatorType",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": [],
              "defaultValue": {
                "termUri": "http://vocab.fairdatacollective.org/gdmt/Person",
                "rdfs:label": "Person"
              }
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Contributor Type)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Contributor Affiliation Identifier Scheme": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:c7122c0e-c397-425b-b5c6-dab61143e774",
            "schema:identifier": "contributor_affiliation_identifier_scheme",
            "schema:name": "Contributor Affiliation Identifier Scheme",
            "schema:description": "The name of the scheme or authority used for the Contributor Affiliation Identifier.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Contributor Affiliation Identifier Scheme",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierScheme",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Contributor Affiliation Identifier Scheme)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Contributor Affiliation Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:cb84a7c3-cf8e-4a73-869c-74f800446367",
            "schema:identifier": "contributor_affiliation_identifier",
            "schema:name": "Contributor Affiliation Identifier",
            "schema:description": "Globally unique string that identifies the organizational affiliation of the contributor.  \n\nWe suggest that you an identifier from the [Research Organization Registry (ROR)](https://ror.org), a community-led project to develop an open, sustainable, usable, and unique identifier for every research organization in the world.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Contributor Affiliation Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Contributor Affiliation Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Contributor Role": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:47f16ecc-e09a-4fd1-8cec-b99b3bb1670c",
            "schema:identifier": "contributor_role",
            "schema:name": "Contributor Role",
            "schema:description": "The role of the contributor in bringing the described data file into existence.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Contributor Role",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/ContributorRole",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Contributor Role)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Contributor Family Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:d00ff761-6d66-4059-8285-951e31bec5c1",
            "schema:identifier": "contributor_family_name",
            "schema:name": "Contributor Family Name",
            "schema:description": "If the contributor is a person, the surname(s) of the conributor (e.g., last name in Western languagues, first name in Asian languages).",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Contributor Family Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Contributor Family Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Contributor Type",
          "Contributor Name",
          "Contributor Given Name",
          "Contributor Family Name",
          "Contributor Identifier",
          "Contributor Identifier Scheme",
          "Contributor Affiliation",
          "Contributor Affiliation Identifier",
          "Contributor Affiliation Identifier Scheme",
          "Contributor Email",
          "Contributor Role"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/632d6ea7-02fa-4588-ac70-2c985c95e00c",
        "_ui": {
          "order": [
            "Contributor Type",
            "Contributor Name",
            "Contributor Given Name",
            "Contributor Family Name",
            "Contributor Identifier",
            "Contributor Identifier Scheme",
            "Contributor Affiliation",
            "Contributor Affiliation Identifier",
            "Contributor Affiliation Identifier Scheme",
            "Contributor Email",
            "Contributor Role"
          ],
          "propertyLabels": {
            "Contributor Type": "Contributor Type",
            "Contributor Name": "Contributor Name",
            "Contributor Given Name": "Contributor Given Name",
            "Contributor Family Name": "Contributor Family Name",
            "Contributor Identifier": "Contributor Identifier",
            "Contributor Identifier Scheme": "Contributor Identifier Scheme",
            "Contributor Affiliation": "Contributor Affiliation",
            "Contributor Affiliation Identifier": "Contributor Affiliation Identifier",
            "Contributor Affiliation Identifier Scheme": "Contributor Affiliation Identifier Scheme",
            "Contributor Email": "Contributor Email",
            "Contributor Role": "Contributor Role"
          },
          "propertyDescriptions": {
            "Contributor Type": "The type of the contributor of the described data file (person or organization).",
            "Contributor Name": "The full name of the contributor.",
            "Contributor Given Name": "If the contributor is a person, the personal name(s) of the contributor (e.g., first and optionally middle name in Western languagues, optionally middle and last name in Asian languages).",
            "Contributor Family Name": "If the contributor is a person, the surname(s) of the conributor (e.g., last name in Western languagues, first name in Asian languages).",
            "Contributor Identifier": "Globally unique string that identifies the contributor (an individual or legal entity). For individuals, this is typically an ORCID; for research organizations, it is typically an ROR.\n\nThe ORCID iD is an https IRI with a 16-digit number that is compatible with the ISO Standard (ISO 27729), also known as the International Standard Name Identifier (ISNI), e.g. https://orcid.org/0000-0001-2345-6789 \n\n_[ORCID](https://orcid.org) provides a persistent digital identifier (an ORCID iD) that distinguishes each researcher from every other researcher. You can connect your iD with your professional information—affiliations, grants, publications, peer review, and more. You can use your iD to share your information with other systems, ensuring you get recognition for all your contributions, saving you time and hassle, and reducing the risk of errors._\n\nThe ROR is an https IRI that uniquely identifies most research organizatiions. \n\n_The [Research Organization Registry (ROR)](https://ror.org) is a community-led project to develop an open, sustainable, usable, and unique identifier for every research organization in the world._",
            "Contributor Identifier Scheme": "The name of the scheme or authority used for the Contributor Identifier.",
            "Contributor Affiliation": "If the contributor is a person, the organizational or institutional affiliation of the contributor.",
            "Contributor Affiliation Identifier": "Globally unique string that identifies the organizational affiliation of the contributor.  \n\nWe suggest that you an identifier from the [Research Organization Registry (ROR)](https://ror.org), a community-led project to develop an open, sustainable, usable, and unique identifier for every research organization in the world.",
            "Contributor Affiliation Identifier Scheme": "The name of the scheme or authority used for the Contributor Affiliation Identifier.",
            "Contributor Email": "An email address of the contributor.",
            "Contributor Role": "The role of the contributor in bringing the described data file into existence."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_contributors",
        "schema:name": "Data File Contributors",
        "schema:description": "A list of people and/or organizations that contributed in bringing into existence the data file being described. While data file creators are also contributors, data file creators should be provided in the Data File Creator section instead of here",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Contributors",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "Data Sources": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data Sources)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Data Source Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/dataSourceName"
                ]
              },
              "Data Source Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/dataSourceIdentifier"
                ]
              },
              "Data Source Identifier Scheme": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/dataSourceIdentifierScheme"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Data Source Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:4da311ae-a1d9-4698-a021-11e405cb3713",
            "schema:identifier": "data_source_identifier",
            "schema:name": "Data Source Identifier",
            "schema:description": "Globally unique string that identifies the data source (e.g., PID of an instrument). This is a required field if you plan to describe the original source of a given Data Stream.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Data Source Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Data Source Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Data Source Identifier Scheme": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:28aa3c74-73b6-4464-8f1a-a207760f767b",
            "schema:identifier": "data_source_identifier_scheme",
            "schema:name": "Data Source Identifier Scheme",
            "schema:description": "The name of the scheme or authority used for the Data Source Identifier.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Data Source Identifier Scheme",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierType",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Data Source Identifier Scheme)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Data Source Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:ce5188ad-68ab-421c-862e-fc93c93b9a0b",
            "schema:identifier": "data_source_name",
            "schema:name": "Data Source Name",
            "schema:description": "Human readable name of data source from which the variable(s) in the data stream(s) originate.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Data Source Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Data Source Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Data Source Name",
          "Data Source Identifier",
          "Data Source Identifier Scheme"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/9b577e80-e0fd-49f3-bd16-7a0f3362623c",
        "_ui": {
          "order": [
            "Data Source Name",
            "Data Source Identifier",
            "Data Source Identifier Scheme"
          ],
          "propertyLabels": {
            "Data Source Name": "Data Source Name",
            "Data Source Identifier": "Data Source Identifier",
            "Data Source Identifier Scheme": "Data Source Identifier Scheme"
          },
          "propertyDescriptions": {
            "Data Source Name": "Human readable name of data source from which the variable(s) in the data stream(s) originate.",
            "Data Source Identifier": "Globally unique string that identifies the data source (e.g., PID of an instrument). This is a required field if you plan to describe the original source of a given Data Stream.",
            "Data Source Identifier Scheme": "The name of the scheme or authority used for the Data Source Identifier."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_sources",
        "schema:name": "Data Sources",
        "schema:description": "A list of physical or conceptual entities (agents) that create the data streams that make up the described data file. A data source may or may not be associated with a fixed location; for example, a series of discrete sensors deployed over time, either to a single location or to a series of locations, may be considered a single data source in some systems.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data Sources",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "Data File Distributions": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Distributions)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Distribution Publisher": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/distributionPublisher"
                ]
              },
              "Distribution Publisher Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/distributionPublisherIdentifier"
                ]
              },
              "Distribution Publisher Identifier Scheme": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/distributionPublisherIdentifierScheme"
                ]
              },
              "Distribution Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/distributionIdentifier"
                ]
              },
              "Distribution Identifier Type": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/distributionIdentifierType"
                ]
              },
              "Distribution Format": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/distributionFormat"
                ]
              },
              "Distribution Media Type": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/distributionMediaType"
                ]
              },
              "Distribution Size": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/distributionSizeInBytes"
                ]
              },
              "Distribution Access Protocol": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/distributionAccessProtocol"
                ]
              },
              "Distribution Access Configuration": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/distributionAccessConfiguration"
                ]
              },
              "Distribution Query Statement": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/distributionQueryStatement"
                ]
              },
              "Data File Publication Date": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/distributionPublicationDescriptor"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Distribution Media Type": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:4c6e0ef6-156f-40cf-952a-d54dc909ec24",
            "schema:identifier": "distribution_media_type",
            "schema:name": "Distribution Media Type",
            "schema:description": "A media type (formerly known as a MIME type) of data file distribution. The most common media type for dataset distributions in the RADx Data Hub is [text/css](http://vocab.fairdatacollective.org/gdmt/text-css)",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Distribution Media Type",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/MIMEType",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Distribution Media Type)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Distribution Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:d627c664-9e2f-487b-a952-91dc0447f739",
            "schema:identifier": "distribution_identifier",
            "schema:name": "Distribution Identifier",
            "schema:description": "A globally unique string that identifies the data file distribution.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Distribution Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Distribution Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Distribution Identifier Type": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:0a7871fc-8540-4229-8e38-3837fd3ef1ce",
            "schema:identifier": "distribution_identifier_type",
            "schema:name": "Distribution Identifier Type",
            "schema:description": "The identifier type used to identify the data file distribution.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Distribution Identifier Type",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierType",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Distribution Identifier Type)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Data File Publication Date": {
            "@type": "https://schema.metadatacenter.org/core/TemplateElement",
            "type": "object",
            "title": "Element(Data File Publication Date)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@context": {
                "properties": {
                  "Data File Publication Date": {
                    "enum": [
                      "http://purl.org/radx-terms/metadata-terms/distributionPublicationDate"
                    ]
                  },
                  "Publication Date Type": {
                    "enum": [
                      "http://purl.org/radx-terms/metadata-terms/distributionPublicationDateType"
                    ]
                  }
                },
                "type": "object",
                "additionalProperties": false
              },
              "@id": {
                "format": "uri",
                "type": "string"
              },
              "@type": {
                "oneOf": [
                  {
                    "format": "uri",
                    "type": "string"
                  },
                  {
                    "items": {
                      "format": "uri",
                      "type": "string"
                    },
                    "uniqueItems": true,
                    "minItems": 1,
                    "type": "array"
                  }
                ]
              },
              "Data File Publication Date": {
                "@type": "https://schema.metadatacenter.org/core/TemplateField",
                "@id": "urn:uuid:dc4ff162-8bb8-42b8-96e1-e64f284e72fc",
                "schema:identifier": "data_file_publication_date",
                "schema:name": "Data File Publication Date",
                "schema:description": "Date on which this distribution of the data file was published",
                "pav:derivedFrom": "",
                "skos:prefLabel": "Data File Publication Date",
                "skos:altLabel": [],
                "pav:version": "1.0.0",
                "bibo:status": "bibo:draft",
                "_valueConstraints": {
                  "temporalType": "xsd:date",
                  "requiredValue": false,
                  "multipleChoice": false
                },
                "_ui": {
                  "temporalGranularity": "day",
                  "valueRecommendationEnabled": true,
                  "inputType": "temporal"
                },
                "pav:createdOn": null,
                "pav:createdBy": null,
                "pav:lastUpdatedOn": null,
                "oslc:modifiedBy": null,
                "type": "object",
                "title": "Field(Data File Publication Date)",
                "description": "Generated by CSV2CEDAR.",
                "properties": {
                  "@type": {
                    "oneOf": [
                      {
                        "type": "string",
                        "format": "uri"
                      },
                      {
                        "type": "array",
                        "minItems": 1,
                        "items": {
                          "type": "string",
                          "format": "uri"
                        },
                        "uniqueItems": true
                      }
                    ]
                  },
                  "@value": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "rdfs:label": {
                    "type": [
                      "string",
                      "null"
                    ]
                  }
                },
                "additionalProperties": false,
                "schema:schemaVersion": "1.6.0",
                "@context": {
                  "xsd": "http://www.w3.org/2001/XMLSchema#",
                  "pav": "http://purl.org/pav/",
                  "bibo": "http://purl.org/ontology/bibo/",
                  "oslc": "http://open-services.net/ns/core#",
                  "schema": "http://schema.org/",
                  "skos": "http://www.w3.org/2004/02/skos/core#",
                  "schema:name": {
                    "@type": "xsd:string"
                  },
                  "schema:description": {
                    "@type": "xsd:string"
                  },
                  "skos:prefLabel": {
                    "@type": "xsd:string"
                  },
                  "skos:altLabel": {
                    "@type": "xsd:string"
                  },
                  "pav:createdOn": {
                    "@type": "xsd:dateTime"
                  },
                  "pav:createdBy": {
                    "@type": "@id"
                  },
                  "pav:lastUpdatedOn": {
                    "@type": "xsd:dateTime"
                  },
                  "oslc:modifiedBy": {
                    "@type": "@id"
                  }
                },
                "$schema": "http://json-schema.org/draft-04/schema#"
              },
              "Publication Date Type": {
                "@type": "https://schema.metadatacenter.org/core/TemplateField",
                "@id": "urn:uuid:7691aecc-7c85-4c7d-b780-05aac7720efb",
                "schema:identifier": "publication_date_type",
                "schema:name": "Publication Date Type",
                "schema:description": "Type of the date ('Published') with respect to the data file.  The value of this field is always [Published](http://vocab.fairdatacollective.org/gdmt/Published).",
                "pav:derivedFrom": "",
                "skos:prefLabel": "Publication Date Type",
                "skos:altLabel": [],
                "pav:version": "1.0.0",
                "bibo:status": "bibo:draft",
                "_valueConstraints": {
                  "defaultValue": "[Published](http://vocab.fairdatacollective.org/gdmt/Published)",
                  "requiredValue": false,
                  "multipleChoice": false
                },
                "_ui": {
                  "inputType": "textfield",
                  "hidden": true
                },
                "pav:createdOn": null,
                "pav:createdBy": null,
                "pav:lastUpdatedOn": null,
                "oslc:modifiedBy": null,
                "type": "object",
                "title": "Field(Publication Date Type)",
                "description": "Generated by CSV2CEDAR.",
                "properties": {
                  "@type": {
                    "oneOf": [
                      {
                        "type": "string",
                        "format": "uri"
                      },
                      {
                        "type": "array",
                        "minItems": 1,
                        "items": {
                          "type": "string",
                          "format": "uri"
                        },
                        "uniqueItems": true
                      }
                    ]
                  },
                  "@value": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "rdfs:label": {
                    "type": [
                      "string",
                      "null"
                    ]
                  }
                },
                "additionalProperties": false,
                "schema:schemaVersion": "1.6.0",
                "@context": {
                  "xsd": "http://www.w3.org/2001/XMLSchema#",
                  "pav": "http://purl.org/pav/",
                  "bibo": "http://purl.org/ontology/bibo/",
                  "oslc": "http://open-services.net/ns/core#",
                  "schema": "http://schema.org/",
                  "skos": "http://www.w3.org/2004/02/skos/core#",
                  "schema:name": {
                    "@type": "xsd:string"
                  },
                  "schema:description": {
                    "@type": "xsd:string"
                  },
                  "skos:prefLabel": {
                    "@type": "xsd:string"
                  },
                  "skos:altLabel": {
                    "@type": "xsd:string"
                  },
                  "pav:createdOn": {
                    "@type": "xsd:dateTime"
                  },
                  "pav:createdBy": {
                    "@type": "@id"
                  },
                  "pav:lastUpdatedOn": {
                    "@type": "xsd:dateTime"
                  },
                  "oslc:modifiedBy": {
                    "@type": "@id"
                  }
                },
                "$schema": "http://json-schema.org/draft-04/schema#"
              }
            },
            "multiValued": false,
            "required": [
              "@context",
              "@id",
              "Data File Publication Date",
              "Publication Date Type"
            ],
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@id": "http://example.org/5457fab3-dd59-4352-95c6-c7d73cce1e5e",
            "_ui": {
              "order": [
                "Data File Publication Date",
                "Publication Date Type"
              ],
              "propertyLabels": {
                "Data File Publication Date": "Data File Publication Date",
                "Publication Date Type": "Publication Date Type"
              },
              "propertyDescriptions": {
                "Data File Publication Date": "Date on which this distribution of the data file was published",
                "Publication Date Type": "Type of the date ('Published') with respect to the data file.  The value of this field is always [Published](http://vocab.fairdatacollective.org/gdmt/Published)."
              }
            },
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "schema:identifier": "data_file_publication_date",
            "schema:name": "Data File Publication Date",
            "schema:description": "Publication date of this distribution the data file.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Data File Publication Date",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Distribution Publisher": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:430c3f70-4a06-4f84-9934-c4eb9d198316",
            "schema:identifier": "distribution_publisher",
            "schema:name": "Distribution Publisher",
            "schema:description": "The organization or resource that provides services to make publicly available this distribution of the data file.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Distribution Publisher",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Distribution Publisher)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Distribution Publisher Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:55c8c8b0-e3ac-4014-acb4-431d4055a4db",
            "schema:identifier": "distribution_publisher_identifier",
            "schema:name": "Distribution Publisher Identifier",
            "schema:description": "Globally unique string that identifies the Distribution Publisher.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Distribution Publisher Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierScheme",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Distribution Publisher Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Distribution Size": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:536bc6bd-ca75-409b-9dd8-3cc37f975d28",
            "schema:identifier": "distribution_size",
            "schema:name": "Distribution Size",
            "schema:description": "Total size of data file distribution (in bytes).",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Distribution Size",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Distribution Size)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Distribution Access Configuration": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:7c9634cb-5394-409e-9140-5fe732815204",
            "schema:identifier": "distribution_access_configuration",
            "schema:name": "Distribution Access Configuration",
            "schema:description": "The access protocol configuration for querying the data file distribution.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Distribution Access Configuration",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Distribution Access Configuration)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Distribution Format": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:23deba16-a24f-4efd-b75f-99e01ed40e18",
            "schema:identifier": "distribution_format",
            "schema:name": "Distribution Format",
            "schema:description": "An established standard to which the data file distribution conforms.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Distribution Format",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Distribution Format)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Distribution Publisher Identifier Scheme": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:3bebea99-8b83-4cb9-b361-279797b1e510",
            "schema:identifier": "distribution_publisher_identifier_scheme",
            "schema:name": "Distribution Publisher Identifier Scheme",
            "schema:description": "Name of the scheme or authority for the Distribution Publisher Identifier.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Distribution Publisher Identifier Scheme",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierScheme",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Distribution Publisher Identifier Scheme)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Distribution Access Protocol": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:adf5492c-f04d-45f0-b12e-fee86de0127c",
            "schema:identifier": "distribution_access_protocol",
            "schema:name": "Distribution Access Protocol",
            "schema:description": "The protocol used to access the data file distribution.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Distribution Access Protocol",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Distribution Access Protocol)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Distribution Query Statement": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:d7a238d3-ac11-4646-9101-5713d05d22ee",
            "schema:identifier": "distribution_query_statement",
            "schema:name": "Distribution Query Statement",
            "schema:description": "Technical statement(s) for querying the data file distribution.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Distribution Query Statement",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Distribution Query Statement)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Distribution Publisher",
          "Distribution Publisher Identifier",
          "Distribution Publisher Identifier Scheme",
          "Distribution Identifier",
          "Distribution Identifier Type",
          "Distribution Format",
          "Distribution Media Type",
          "Distribution Size",
          "Distribution Access Protocol",
          "Distribution Access Configuration",
          "Distribution Query Statement",
          "Data File Publication Date"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/50b2b2d2-7bb6-4beb-9066-6696ab2c4af3",
        "_ui": {
          "order": [
            "Distribution Publisher",
            "Distribution Publisher Identifier",
            "Distribution Publisher Identifier Scheme",
            "Distribution Identifier",
            "Distribution Identifier Type",
            "Distribution Format",
            "Distribution Media Type",
            "Distribution Size",
            "Distribution Access Protocol",
            "Distribution Access Configuration",
            "Distribution Query Statement",
            "Data File Publication Date"
          ],
          "propertyLabels": {
            "Distribution Publisher": "Distribution Publisher",
            "Distribution Publisher Identifier": "Distribution Publisher Identifier",
            "Distribution Publisher Identifier Scheme": "Distribution Publisher Identifier Scheme",
            "Distribution Identifier": "Distribution Identifier",
            "Distribution Identifier Type": "Distribution Identifier Type",
            "Distribution Format": "Distribution Format",
            "Distribution Media Type": "Distribution Media Type",
            "Distribution Size": "Distribution Size",
            "Distribution Access Protocol": "Distribution Access Protocol",
            "Distribution Access Configuration": "Distribution Access Configuration",
            "Distribution Query Statement": "Distribution Query Statement",
            "Data File Publication Date": "Data File Publication Date"
          },
          "propertyDescriptions": {
            "Distribution Publisher": "The organization or resource that provides services to make publicly available this distribution of the data file.",
            "Distribution Publisher Identifier": "Globally unique string that identifies the Distribution Publisher.",
            "Distribution Publisher Identifier Scheme": "Name of the scheme or authority for the Distribution Publisher Identifier.",
            "Distribution Identifier": "A globally unique string that identifies the data file distribution.",
            "Distribution Identifier Type": "The identifier type used to identify the data file distribution.",
            "Distribution Format": "An established standard to which the data file distribution conforms.",
            "Distribution Media Type": "A media type (formerly known as a MIME type) of data file distribution. The most common media type for dataset distributions in the RADx Data Hub is [text/css](http://vocab.fairdatacollective.org/gdmt/text-css)",
            "Distribution Size": "Total size of data file distribution (in bytes).",
            "Distribution Access Protocol": "The protocol used to access the data file distribution.",
            "Distribution Access Configuration": "The access protocol configuration for querying the data file distribution.",
            "Distribution Query Statement": "Technical statement(s) for querying the data file distribution.",
            "Data File Publication Date": "Publication date of this distribution the data file."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_distributions",
        "schema:name": "Data File Distributions",
        "schema:description": "A list of specific (non-Data Hub) distributions for this data file. If the only available distribution for the Data File is in the RADx Data Hub, there is no need to fill out Distribution information.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Distributions",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "Data File Temporal Coverage": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Temporal Coverage)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Temporal Extent Minimum Value": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/temporalExtentMinimumValue"
                ]
              },
              "Temporal Extent Maximum Value": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/temporalExtentMaximumValue"
                ]
              },
              "Temporal Resolution": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/temporalResolution"
                ]
              },
              "Duration": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/temporalCoverageDuration"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Temporal Extent Minimum Value": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:b627b46e-fc07-4ef8-9db5-538004cd9d92",
            "schema:identifier": "temporal_extent_minimum_value",
            "schema:name": "Temporal Extent Minimum Value",
            "schema:description": "The start date (and optionally time) of the data.\n\nNote that dates must be specified in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. This format specifies date/times in a locale neutral way with temporal components ordered largest to smallest, for example year, month, day. Note that times are in 24 hour clock (military time) format, thus 13:43 is 1:43pm. When times are specified a time zone must also be specified (Z or +00:00 indicates Greenwich Mean Time).\n\nThe date time 2022-11-23T01:23:45.678-07:00 specifies November 23, 2022 at just past 1:23am Pacific Daylight Time. Hyphens and colons are optional.\n\nThe date 2022-09-23 specifies September 23, 2022 (without a time stamp). Dates are assumed GMT if no time zone is specified.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Temporal Extent Minimum Value",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "temporalType": "xsd:date",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "temporalGranularity": "day",
              "valueRecommendationEnabled": true,
              "inputType": "temporal"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Temporal Extent Minimum Value)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Temporal Extent Maximum Value": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:93d7bbea-36de-42c1-b977-c57072c19b15",
            "schema:identifier": "temporal_extent_maximum_value",
            "schema:name": "Temporal Extent Maximum Value",
            "schema:description": "The end date (and optionally time) of the data.\n\nNote that dates must be specified in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. This format specifies date/times in a locale neutral way with temporal components ordered largest to smallest, for example year, month, day. Note that times are in 24 hour clock (military time) format, thus 13:43 is 1:43pm. When times are specified a time zone must also be specified (Z or +00:00 indicates Greenwich Mean Time).\n\nThe date time 2022-11-23T01:23:45.678-07:00 specifies November 23, 2022 at just past 1:23am Pacific Daylight Time. Hyphens and colons are optional.\n\nThe date 2022-09-23 specifies September 23, 2022 (without a time stamp). Dates are assumed GMT if no time zone is specified.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Temporal Extent Maximum Value",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "temporalType": "xsd:date",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "temporalGranularity": "day",
              "valueRecommendationEnabled": true,
              "inputType": "temporal"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Temporal Extent Maximum Value)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Temporal Resolution": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:235c82dd-8b97-4479-a9ea-b086ecfffe01",
            "schema:identifier": "temporal_resolution",
            "schema:name": "Temporal Resolution",
            "schema:description": "The nominal time interval between the measurement time of one data record and that of the following data record, in seconds. Measurement time can be considered as the beginning, end, or other known point in the measurement process.\n\nMost repeating measurement processes have some variation in the interval between measurements. If there is no planned schedule for the measurements, this value can be set to 0.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Temporal Resolution",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Temporal Resolution)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Duration": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:29cce9f2-e2a1-497b-b752-cdf3df86070f",
            "schema:identifier": "duration",
            "schema:name": "Duration",
            "schema:description": "The total duration of data temporal coverage, specified in in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) duration format.\n\nP is the duration designator (for period) placed at the start of the duration representation.\n- Y is the year designator that follows the value for the number of calendar years.\n- M is the month designator that follows the value for the number of calendar months.\n- W is the week designator that follows the value for the number of weeks.\n- D is the day designator that follows the value for the number of calendar days.\nT is the time designator that precedes the time components of the representation.\n- H is the hour designator that follows the value for the number of hours.\n- M is the minute designator that follows the value for the number of minutes.\n- S is the second designator that follows the value for the number of seconds.\n\nThe duration format must begin with P, and include at least one designator and value; other designators may be dropped. The smallest designator may include a decimal fraction. For example, P8DT1.5H indicates a duration of 8 calendar days + 1.5 hours.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Duration",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Duration)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Temporal Extent Minimum Value",
          "Temporal Extent Maximum Value",
          "Temporal Resolution",
          "Duration"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/87e6e8be-2cc7-41fd-814b-c4e38fdaf465",
        "_ui": {
          "order": [
            "Temporal Extent Minimum Value",
            "Temporal Extent Maximum Value",
            "Temporal Resolution",
            "Duration"
          ],
          "propertyLabels": {
            "Temporal Extent Minimum Value": "Temporal Extent Minimum Value",
            "Temporal Extent Maximum Value": "Temporal Extent Maximum Value",
            "Temporal Resolution": "Temporal Resolution",
            "Duration": "Duration"
          },
          "propertyDescriptions": {
            "Temporal Extent Minimum Value": "The start date (and optionally time) of the data.\n\nNote that dates must be specified in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. This format specifies date/times in a locale neutral way with temporal components ordered largest to smallest, for example year, month, day. Note that times are in 24 hour clock (military time) format, thus 13:43 is 1:43pm. When times are specified a time zone must also be specified (Z or +00:00 indicates Greenwich Mean Time).\n\nThe date time 2022-11-23T01:23:45.678-07:00 specifies November 23, 2022 at just past 1:23am Pacific Daylight Time. Hyphens and colons are optional.\n\nThe date 2022-09-23 specifies September 23, 2022 (without a time stamp). Dates are assumed GMT if no time zone is specified.",
            "Temporal Extent Maximum Value": "The end date (and optionally time) of the data.\n\nNote that dates must be specified in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. This format specifies date/times in a locale neutral way with temporal components ordered largest to smallest, for example year, month, day. Note that times are in 24 hour clock (military time) format, thus 13:43 is 1:43pm. When times are specified a time zone must also be specified (Z or +00:00 indicates Greenwich Mean Time).\n\nThe date time 2022-11-23T01:23:45.678-07:00 specifies November 23, 2022 at just past 1:23am Pacific Daylight Time. Hyphens and colons are optional.\n\nThe date 2022-09-23 specifies September 23, 2022 (without a time stamp). Dates are assumed GMT if no time zone is specified.",
            "Temporal Resolution": "The nominal time interval between the measurement time of one data record and that of the following data record, in seconds. Measurement time can be considered as the beginning, end, or other known point in the measurement process.\n\nMost repeating measurement processes have some variation in the interval between measurements. If there is no planned schedule for the measurements, this value can be set to 0.",
            "Duration": "The total duration of data temporal coverage, specified in in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) duration format.\n\nP is the duration designator (for period) placed at the start of the duration representation.\n- Y is the year designator that follows the value for the number of calendar years.\n- M is the month designator that follows the value for the number of calendar months.\n- W is the week designator that follows the value for the number of weeks.\n- D is the day designator that follows the value for the number of calendar days.\nT is the time designator that precedes the time components of the representation.\n- H is the hour designator that follows the value for the number of hours.\n- M is the minute designator that follows the value for the number of minutes.\n- S is the second designator that follows the value for the number of seconds.\n\nThe duration format must begin with P, and include at least one designator and value; other designators may be dropped. The smallest designator may include a decimal fraction. For example, P8DT1.5H indicates a duration of 8 calendar days + 1.5 hours."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_temporal_coverage",
        "schema:name": "Data File Temporal Coverage",
        "schema:description": "A list of temporal descriptions that specify the temporal coverage of the data contained within the data file associated with this metadata.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Temporal Coverage",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "@context": {
      "required": [
        "Data File Titles",
        "Data File Identity",
        "Data File Language",
        "Data File Subjects",
        "Data File Descriptions",
        "Data File Data Dictionary",
        "Data File Creators",
        "Data File Related Resources",
        "Data File Contributors",
        "Data File Rights",
        "Data File Dates",
        "Data File Parent Studies",
        "Data File Funding Sources",
        "Data File Distributions",
        "Data Characteristics Summary",
        "Data Sources",
        "Data Streams",
        "Data File Creation Processes",
        "Data File Temporal Coverage",
        "Data File Spatial Coverage",
        "Data File Elevation Coverage",
        "Auxiliary Metadata",
        "oslc:modifiedBy",
        "pav:createdBy",
        "pav:createdOn",
        "pav:derivedFrom",
        "pav:lastUpdatedOn",
        "schema:description",
        "schema:isBasedOn",
        "schema:name"
      ],
      "additionalProperties": false,
      "properties": {
        "schema": {
          "type": "string",
          "format": "uri",
          "enum": [
            "http://schema.org/"
          ]
        },
        "Data Characteristics Summary": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsDescriptor"
          ]
        },
        "Data Streams": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/dataStreamDescriptor"
          ]
        },
        "Data File Identity": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/identityDescriptor"
          ]
        },
        "Auxiliary Metadata": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataDescriptor"
          ]
        },
        "xsd": {
          "type": "string",
          "format": "uri",
          "enum": [
            "http://www.w3.org/2001/XMLSchema#"
          ]
        },
        "pav:createdOn": {
          "type": "object",
          "properties": {
            "@type": {
              "type": "string",
              "enum": [
                "xsd:dateTime"
              ]
            }
          }
        },
        "skos": {
          "type": "string",
          "format": "uri",
          "enum": [
            "http://www.w3.org/2004/02/skos/core#"
          ]
        },
        "rdfs": {
          "type": "string",
          "format": "uri",
          "enum": [
            "http://www.w3.org/2000/01/rdf-schema#"
          ]
        },
        "Data File Funding Sources": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/fundingSourceDescriptor"
          ]
        },
        "pav:createdBy": {
          "type": "object",
          "properties": {
            "@type": {
              "type": "string",
              "enum": [
                "@id"
              ]
            }
          }
        },
        "Data File Language": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/languageDescriptor"
          ]
        },
        "rdfs:label": {
          "type": "object",
          "properties": {
            "@type": {
              "type": "string",
              "enum": [
                "xsd:string"
              ]
            }
          }
        },
        "Data File Subjects": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/subjectsAndKeywordsDescriptor"
          ]
        },
        "oslc:modifiedBy": {
          "type": "object",
          "properties": {
            "@type": {
              "type": "string",
              "enum": [
                "@id"
              ]
            }
          }
        },
        "skos:notation": {
          "type": "object",
          "properties": {
            "@type": {
              "type": "string",
              "enum": [
                "xsd:string"
              ]
            }
          }
        },
        "Data File Parent Studies": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/parentStudyDescriptor"
          ]
        },
        "Data File Titles": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/titleDescriptor"
          ]
        },
        "Data File Elevation Coverage": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/elevationCoverageDescriptor"
          ]
        },
        "Data File Related Resources": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/relatedResourceDescriptor"
          ]
        },
        "Data File Descriptions": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/descriptionDescriptor"
          ]
        },
        "Data File Rights": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/rightsDescriptor"
          ]
        },
        "pav": {
          "type": "string",
          "format": "uri",
          "enum": [
            "http://purl.org/pav/"
          ]
        },
        "Data File Contributors": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/contributorDescriptor"
          ]
        },
        "Data Sources": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/dataSourceDescriptor"
          ]
        },
        "Data File Distributions": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/distributionDescriptor"
          ]
        },
        "Data File Temporal Coverage": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/temporalCoverageDescriptor"
          ]
        },
        "oslc": {
          "type": "string",
          "format": "uri",
          "enum": [
            "http://open-services.net/ns/core#"
          ]
        },
        "Data File Dates": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/eventsDescriptor"
          ]
        },
        "Data File Spatial Coverage": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/spatialCoverageDescriptor"
          ]
        },
        "Data File Creators": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/creatorDescriptor"
          ]
        },
        "Data File Data Dictionary": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/dataDictionaryDescriptor"
          ]
        },
        "schema:isBasedOn": {
          "type": "object",
          "properties": {
            "@type": {
              "type": "string",
              "enum": [
                "@id"
              ]
            }
          }
        },
        "schema:description": {
          "type": "object",
          "properties": {
            "@type": {
              "type": "string",
              "enum": [
                "xsd:string"
              ]
            }
          }
        },
        "pav:lastUpdatedOn": {
          "type": "object",
          "properties": {
            "@type": {
              "type": "string",
              "enum": [
                "xsd:dateTime"
              ]
            }
          }
        },
        "schema:name": {
          "type": "object",
          "properties": {
            "@type": {
              "type": "string",
              "enum": [
                "xsd:string"
              ]
            }
          }
        },
        "Data File Creation Processes": {
          "enum": [
            "http://purl.org/radx-terms/metadata-terms/dataFileCreationProcessDescriptor"
          ]
        },
        "pav:derivedFrom": {
          "type": "object",
          "properties": {
            "@type": {
              "type": "string",
              "enum": [
                "@id"
              ]
            }
          }
        }
      },
      "type": "object"
    },
    "Data File Dates": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Dates)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Event Type": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/eventType"
                ]
              },
              "Date": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/eventDate"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Event Type": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:030bf51b-3f59-4ee3-93f4-c3a8e9979da6",
            "schema:identifier": "event_type",
            "schema:name": "Event Type",
            "schema:description": "Type of Data File event that the date is associated with. The Event Type is usually considered with respect to the corresponding actor; for example, Created is typically the initial creation of the Data File by its originator, Accepted is when an ingested Data File is approved (e.g., by the Data Hub), and Updated is the time of the most recent change to the Data File.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Event Type",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/DateType",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Event Type)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Date": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:f398ad86-c3a0-4f27-a315-70e259a15992",
            "schema:identifier": "date",
            "schema:name": "Date",
            "schema:description": "The date/time that is specific to the associated event. \n\nNote that dates must be specified in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. This format specifies date/times in a locale neutral way with temporal components ordered largest to smallest, for example year, month, day. Note that times are in 24 hour clock (military time) format, thus 13:43 is 1:43pm. When times are specified a time zone must also be specified (Z or +00:00 indicates Greenwich Mean Time).\n\nThe date time 2022-11-23T01:23:45.678-07:00 specifies November 23, 2022 at just past 1:23am Pacific Daylight Time. Hyphens and colons are optional.\n\nThe date 2022-09-23 specifies September 23, 2022 (without a time stamp). Dates are assumed GMT if no time zone is specified.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Date",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "temporalType": "xsd:date",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "temporalGranularity": "day",
              "valueRecommendationEnabled": true,
              "inputType": "temporal"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Date)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Event Type",
          "Date"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/0b0c03df-e116-4571-b7cb-93bf5301bdc3",
        "_ui": {
          "order": [
            "Event Type",
            "Date"
          ],
          "propertyLabels": {
            "Event Type": "Event Type",
            "Date": "Date"
          },
          "propertyDescriptions": {
            "Event Type": "Type of Data File event that the date is associated with. The Event Type is usually considered with respect to the corresponding actor; for example, Created is typically the initial creation of the Data File by its originator, Accepted is when an ingested Data File is approved (e.g., by the Data Hub), and Updated is the time of the most recent change to the Data File.",
            "Date": "The date/time that is specific to the associated event. \n\nNote that dates must be specified in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. This format specifies date/times in a locale neutral way with temporal components ordered largest to smallest, for example year, month, day. Note that times are in 24 hour clock (military time) format, thus 13:43 is 1:43pm. When times are specified a time zone must also be specified (Z or +00:00 indicates Greenwich Mean Time).\n\nThe date time 2022-11-23T01:23:45.678-07:00 specifies November 23, 2022 at just past 1:23am Pacific Daylight Time. Hyphens and colons are optional.\n\nThe date 2022-09-23 specifies September 23, 2022 (without a time stamp). Dates are assumed GMT if no time zone is specified."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_dates",
        "schema:name": "Data File Dates",
        "schema:description": "A list of relevant dates related to the data file being described. Such dates pertain to some data-file-related event, for example \"creation date\", \"submission date\" etc. Dates are specified as a pair containing the actual date (in ISO-8601 format) and the event that the date relates to. See individual fields for specific examples.\n\nThe dates of some types of events can be captured by the RADx Data Hub, for example the \"Submitted\" date/time.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Dates",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "Data File Spatial Coverage": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Spatial Coverage)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Bounding Boxes": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/boundingBoxDescriptor"
                ]
              },
              "Bounding Shapes": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/boundingShapeDescriptor"
                ]
              },
              "Data File Geopolitical Coverage": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/geopoliticalCoverageDescriptor"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Bounding Boxes": {
            "type": "array",
            "minItems": 0,
            "items": {
              "@type": "https://schema.metadatacenter.org/core/TemplateElement",
              "type": "object",
              "title": "Element(Bounding Boxes)",
              "description": "Generated by CSV2CEDAR.",
              "properties": {
                "@context": {
                  "properties": {
                    "Maximum Latitude": {
                      "enum": [
                        "http://purl.org/radx-terms/metadata-terms/maxLatitude"
                      ]
                    },
                    "Minimum Latitude": {
                      "enum": [
                        "http://purl.org/radx-terms/metadata-terms/minLatitude"
                      ]
                    },
                    "Minimum Longitude": {
                      "enum": [
                        "http://purl.org/radx-terms/metadata-terms/minLongitude"
                      ]
                    },
                    "Maximum Longitude": {
                      "enum": [
                        "http://purl.org/radx-terms/metadata-terms/maxLongitude"
                      ]
                    }
                  },
                  "type": "object",
                  "additionalProperties": false
                },
                "@id": {
                  "format": "uri",
                  "type": "string"
                },
                "@type": {
                  "oneOf": [
                    {
                      "format": "uri",
                      "type": "string"
                    },
                    {
                      "items": {
                        "format": "uri",
                        "type": "string"
                      },
                      "uniqueItems": true,
                      "minItems": 1,
                      "type": "array"
                    }
                  ]
                },
                "Minimum Latitude": {
                  "@type": "https://schema.metadatacenter.org/core/TemplateField",
                  "@id": "urn:uuid:ee159e11-d911-45aa-ab33-071bd5149735",
                  "schema:identifier": "minimum_latitude",
                  "schema:name": "Minimum Latitude",
                  "schema:description": "Location of the minimum, or southernmost, data point in this data file, expressed in decimal degrees (southern latitudes are negative).\n\n37.5 specifies 37.5 degrees North (37 degrees and 30 minutes North)\n\n-5.5  specifies 5.5 degrees South (5 degrees and 30 minutes South)",
                  "pav:derivedFrom": "",
                  "skos:prefLabel": "Minimum Latitude",
                  "skos:altLabel": [],
                  "pav:version": "1.0.0",
                  "bibo:status": "bibo:draft",
                  "_valueConstraints": {
                    "defaultValue": "",
                    "requiredValue": false,
                    "multipleChoice": false
                  },
                  "_ui": {
                    "inputType": "textfield"
                  },
                  "pav:createdOn": null,
                  "pav:createdBy": null,
                  "pav:lastUpdatedOn": null,
                  "oslc:modifiedBy": null,
                  "type": "object",
                  "title": "Field(Minimum Latitude)",
                  "description": "Generated by CSV2CEDAR.",
                  "properties": {
                    "@type": {
                      "oneOf": [
                        {
                          "type": "string",
                          "format": "uri"
                        },
                        {
                          "type": "array",
                          "minItems": 1,
                          "items": {
                            "type": "string",
                            "format": "uri"
                          },
                          "uniqueItems": true
                        }
                      ]
                    },
                    "@value": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "rdfs:label": {
                      "type": [
                        "string",
                        "null"
                      ]
                    }
                  },
                  "additionalProperties": false,
                  "schema:schemaVersion": "1.6.0",
                  "@context": {
                    "xsd": "http://www.w3.org/2001/XMLSchema#",
                    "pav": "http://purl.org/pav/",
                    "bibo": "http://purl.org/ontology/bibo/",
                    "oslc": "http://open-services.net/ns/core#",
                    "schema": "http://schema.org/",
                    "skos": "http://www.w3.org/2004/02/skos/core#",
                    "schema:name": {
                      "@type": "xsd:string"
                    },
                    "schema:description": {
                      "@type": "xsd:string"
                    },
                    "skos:prefLabel": {
                      "@type": "xsd:string"
                    },
                    "skos:altLabel": {
                      "@type": "xsd:string"
                    },
                    "pav:createdOn": {
                      "@type": "xsd:dateTime"
                    },
                    "pav:createdBy": {
                      "@type": "@id"
                    },
                    "pav:lastUpdatedOn": {
                      "@type": "xsd:dateTime"
                    },
                    "oslc:modifiedBy": {
                      "@type": "@id"
                    }
                  },
                  "$schema": "http://json-schema.org/draft-04/schema#"
                },
                "Maximum Latitude": {
                  "@type": "https://schema.metadatacenter.org/core/TemplateField",
                  "@id": "urn:uuid:b9a8e7cd-6d56-4ce5-a833-04e6b2456481",
                  "schema:identifier": "maximum_latitude",
                  "schema:name": "Maximum Latitude",
                  "schema:description": "Location of the maximum, or northernmost, data point in this data file, expressed in decimal degrees (southern latitudes are negative).\n\n37.5 specifies 37.5 degrees North (37 degrees and 30 minutes North)\n\n-5.5  specifies 5.5 degrees South (5 degrees and 30 minutes South)",
                  "pav:derivedFrom": "",
                  "skos:prefLabel": "Maximum Latitude",
                  "skos:altLabel": [],
                  "pav:version": "1.0.0",
                  "bibo:status": "bibo:draft",
                  "_valueConstraints": {
                    "defaultValue": "",
                    "requiredValue": false,
                    "multipleChoice": false
                  },
                  "_ui": {
                    "inputType": "textfield"
                  },
                  "pav:createdOn": null,
                  "pav:createdBy": null,
                  "pav:lastUpdatedOn": null,
                  "oslc:modifiedBy": null,
                  "type": "object",
                  "title": "Field(Maximum Latitude)",
                  "description": "Generated by CSV2CEDAR.",
                  "properties": {
                    "@type": {
                      "oneOf": [
                        {
                          "type": "string",
                          "format": "uri"
                        },
                        {
                          "type": "array",
                          "minItems": 1,
                          "items": {
                            "type": "string",
                            "format": "uri"
                          },
                          "uniqueItems": true
                        }
                      ]
                    },
                    "@value": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "rdfs:label": {
                      "type": [
                        "string",
                        "null"
                      ]
                    }
                  },
                  "additionalProperties": false,
                  "schema:schemaVersion": "1.6.0",
                  "@context": {
                    "xsd": "http://www.w3.org/2001/XMLSchema#",
                    "pav": "http://purl.org/pav/",
                    "bibo": "http://purl.org/ontology/bibo/",
                    "oslc": "http://open-services.net/ns/core#",
                    "schema": "http://schema.org/",
                    "skos": "http://www.w3.org/2004/02/skos/core#",
                    "schema:name": {
                      "@type": "xsd:string"
                    },
                    "schema:description": {
                      "@type": "xsd:string"
                    },
                    "skos:prefLabel": {
                      "@type": "xsd:string"
                    },
                    "skos:altLabel": {
                      "@type": "xsd:string"
                    },
                    "pav:createdOn": {
                      "@type": "xsd:dateTime"
                    },
                    "pav:createdBy": {
                      "@type": "@id"
                    },
                    "pav:lastUpdatedOn": {
                      "@type": "xsd:dateTime"
                    },
                    "oslc:modifiedBy": {
                      "@type": "@id"
                    }
                  },
                  "$schema": "http://json-schema.org/draft-04/schema#"
                },
                "Maximum Longitude": {
                  "@type": "https://schema.metadatacenter.org/core/TemplateField",
                  "@id": "urn:uuid:9492a4f5-6428-4752-87e3-7d7add6b6873",
                  "schema:identifier": "maximum_longitude",
                  "schema:name": "Maximum Longitude",
                  "schema:description": "Location of the maximum, or easternmost, data point in this data file, expressed in decimal degrees (western longitudes are negative)\n\n150.0 specifies 150 degrees East\n\n-122.0 specifies 122 degrees West",
                  "pav:derivedFrom": "",
                  "skos:prefLabel": "Maximum Longitude",
                  "skos:altLabel": [],
                  "pav:version": "1.0.0",
                  "bibo:status": "bibo:draft",
                  "_valueConstraints": {
                    "defaultValue": "",
                    "requiredValue": false,
                    "multipleChoice": false
                  },
                  "_ui": {
                    "inputType": "textfield"
                  },
                  "pav:createdOn": null,
                  "pav:createdBy": null,
                  "pav:lastUpdatedOn": null,
                  "oslc:modifiedBy": null,
                  "type": "object",
                  "title": "Field(Maximum Longitude)",
                  "description": "Generated by CSV2CEDAR.",
                  "properties": {
                    "@type": {
                      "oneOf": [
                        {
                          "type": "string",
                          "format": "uri"
                        },
                        {
                          "type": "array",
                          "minItems": 1,
                          "items": {
                            "type": "string",
                            "format": "uri"
                          },
                          "uniqueItems": true
                        }
                      ]
                    },
                    "@value": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "rdfs:label": {
                      "type": [
                        "string",
                        "null"
                      ]
                    }
                  },
                  "additionalProperties": false,
                  "schema:schemaVersion": "1.6.0",
                  "@context": {
                    "xsd": "http://www.w3.org/2001/XMLSchema#",
                    "pav": "http://purl.org/pav/",
                    "bibo": "http://purl.org/ontology/bibo/",
                    "oslc": "http://open-services.net/ns/core#",
                    "schema": "http://schema.org/",
                    "skos": "http://www.w3.org/2004/02/skos/core#",
                    "schema:name": {
                      "@type": "xsd:string"
                    },
                    "schema:description": {
                      "@type": "xsd:string"
                    },
                    "skos:prefLabel": {
                      "@type": "xsd:string"
                    },
                    "skos:altLabel": {
                      "@type": "xsd:string"
                    },
                    "pav:createdOn": {
                      "@type": "xsd:dateTime"
                    },
                    "pav:createdBy": {
                      "@type": "@id"
                    },
                    "pav:lastUpdatedOn": {
                      "@type": "xsd:dateTime"
                    },
                    "oslc:modifiedBy": {
                      "@type": "@id"
                    }
                  },
                  "$schema": "http://json-schema.org/draft-04/schema#"
                },
                "Minimum Longitude": {
                  "@type": "https://schema.metadatacenter.org/core/TemplateField",
                  "@id": "urn:uuid:aac4eb88-d9b1-4509-abbc-92d64fe252a9",
                  "schema:identifier": "minimum_longitude",
                  "schema:name": "Minimum Longitude",
                  "schema:description": "Location of the minimum, or westernmost, data point in this data file, expressed in decimal degrees (western longitudes are negative)\n\n150.0 specifies 150 degrees East\n\n-122.0 specifies 122 degrees West",
                  "pav:derivedFrom": "",
                  "skos:prefLabel": "Minimum Longitude",
                  "skos:altLabel": [],
                  "pav:version": "1.0.0",
                  "bibo:status": "bibo:draft",
                  "_valueConstraints": {
                    "defaultValue": "",
                    "requiredValue": false,
                    "multipleChoice": false
                  },
                  "_ui": {
                    "inputType": "textfield"
                  },
                  "pav:createdOn": null,
                  "pav:createdBy": null,
                  "pav:lastUpdatedOn": null,
                  "oslc:modifiedBy": null,
                  "type": "object",
                  "title": "Field(Minimum Longitude)",
                  "description": "Generated by CSV2CEDAR.",
                  "properties": {
                    "@type": {
                      "oneOf": [
                        {
                          "type": "string",
                          "format": "uri"
                        },
                        {
                          "type": "array",
                          "minItems": 1,
                          "items": {
                            "type": "string",
                            "format": "uri"
                          },
                          "uniqueItems": true
                        }
                      ]
                    },
                    "@value": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "rdfs:label": {
                      "type": [
                        "string",
                        "null"
                      ]
                    }
                  },
                  "additionalProperties": false,
                  "schema:schemaVersion": "1.6.0",
                  "@context": {
                    "xsd": "http://www.w3.org/2001/XMLSchema#",
                    "pav": "http://purl.org/pav/",
                    "bibo": "http://purl.org/ontology/bibo/",
                    "oslc": "http://open-services.net/ns/core#",
                    "schema": "http://schema.org/",
                    "skos": "http://www.w3.org/2004/02/skos/core#",
                    "schema:name": {
                      "@type": "xsd:string"
                    },
                    "schema:description": {
                      "@type": "xsd:string"
                    },
                    "skos:prefLabel": {
                      "@type": "xsd:string"
                    },
                    "skos:altLabel": {
                      "@type": "xsd:string"
                    },
                    "pav:createdOn": {
                      "@type": "xsd:dateTime"
                    },
                    "pav:createdBy": {
                      "@type": "@id"
                    },
                    "pav:lastUpdatedOn": {
                      "@type": "xsd:dateTime"
                    },
                    "oslc:modifiedBy": {
                      "@type": "@id"
                    }
                  },
                  "$schema": "http://json-schema.org/draft-04/schema#"
                }
              },
              "multiValued": false,
              "required": [
                "@context",
                "@id",
                "Maximum Latitude",
                "Minimum Latitude",
                "Minimum Longitude",
                "Maximum Longitude"
              ],
              "additionalProperties": false,
              "schema:schemaVersion": "1.6.0",
              "@id": "http://example.org/6ea4dd28-4713-46bd-89d0-bfab24c01e2a",
              "_ui": {
                "order": [
                  "Maximum Latitude",
                  "Minimum Latitude",
                  "Minimum Longitude",
                  "Maximum Longitude"
                ],
                "propertyLabels": {
                  "Maximum Latitude": "Maximum Latitude",
                  "Minimum Latitude": "Minimum Latitude",
                  "Minimum Longitude": "Minimum Longitude",
                  "Maximum Longitude": "Maximum Longitude"
                },
                "propertyDescriptions": {
                  "Maximum Latitude": "Location of the maximum, or northernmost, data point in this data file, expressed in decimal degrees (southern latitudes are negative).\n\n37.5 specifies 37.5 degrees North (37 degrees and 30 minutes North)\n\n-5.5  specifies 5.5 degrees South (5 degrees and 30 minutes South)",
                  "Minimum Latitude": "Location of the minimum, or southernmost, data point in this data file, expressed in decimal degrees (southern latitudes are negative).\n\n37.5 specifies 37.5 degrees North (37 degrees and 30 minutes North)\n\n-5.5  specifies 5.5 degrees South (5 degrees and 30 minutes South)",
                  "Minimum Longitude": "Location of the minimum, or westernmost, data point in this data file, expressed in decimal degrees (western longitudes are negative)\n\n150.0 specifies 150 degrees East\n\n-122.0 specifies 122 degrees West",
                  "Maximum Longitude": "Location of the maximum, or easternmost, data point in this data file, expressed in decimal degrees (western longitudes are negative)\n\n150.0 specifies 150 degrees East\n\n-122.0 specifies 122 degrees West"
                }
              },
              "@context": {
                "xsd": "http://www.w3.org/2001/XMLSchema#",
                "pav": "http://purl.org/pav/",
                "bibo": "http://purl.org/ontology/bibo/",
                "oslc": "http://open-services.net/ns/core#",
                "schema": "http://schema.org/",
                "schema:name": {
                  "@type": "xsd:string"
                },
                "schema:description": {
                  "@type": "xsd:string"
                },
                "pav:createdOn": {
                  "@type": "xsd:dateTime"
                },
                "pav:createdBy": {
                  "@type": "@id"
                },
                "pav:lastUpdatedOn": {
                  "@type": "xsd:dateTime"
                },
                "oslc:modifiedBy": {
                  "@type": "@id"
                }
              },
              "schema:identifier": "bounding_boxes",
              "schema:name": "Bounding Boxes",
              "schema:description": "A list of geographical bounding boxes that specifies the geographical coverage of the data contained within the data file associated with this metadata.",
              "pav:derivedFrom": "",
              "skos:prefLabel": "Bounding Boxes",
              "skos:altLabel": [],
              "pav:version": "1.0.0",
              "bibo:status": "bibo:draft",
              "pav:createdOn": null,
              "pav:createdBy": null,
              "pav:lastUpdatedOn": null,
              "oslc:modifiedBy": null,
              "$schema": "http://json-schema.org/draft-04/schema#"
            }
          },
          "Bounding Shapes": {
            "type": "array",
            "minItems": 0,
            "items": {
              "@type": "https://schema.metadatacenter.org/core/TemplateElement",
              "type": "object",
              "title": "Element(Bounding Shapes)",
              "description": "Generated by CSV2CEDAR.",
              "properties": {
                "@context": {
                  "properties": {
                    "Point Number": {
                      "enum": [
                        "http://purl.org/radx-terms/metadata-terms/pointNumber"
                      ]
                    },
                    "Latitude": {
                      "enum": [
                        "http://purl.org/radx-terms/metadata-terms/latitude"
                      ]
                    },
                    "Longitude": {
                      "enum": [
                        "http://purl.org/radx-terms/metadata-terms/longitude"
                      ]
                    }
                  },
                  "type": "object",
                  "additionalProperties": false
                },
                "@id": {
                  "format": "uri",
                  "type": "string"
                },
                "@type": {
                  "oneOf": [
                    {
                      "format": "uri",
                      "type": "string"
                    },
                    {
                      "items": {
                        "format": "uri",
                        "type": "string"
                      },
                      "uniqueItems": true,
                      "minItems": 1,
                      "type": "array"
                    }
                  ]
                },
                "Point Number": {
                  "@type": "https://schema.metadatacenter.org/core/TemplateField",
                  "@id": "urn:uuid:ee5d8e91-84f9-49d5-a2dc-5afb89f46302",
                  "schema:identifier": "point_number",
                  "schema:name": "Point Number",
                  "schema:description": "Monotonically increasing identifier of the point in the shape being defined (defined in clockwise order and containing the right side of the closed shape). The last point must be the same as the first point.",
                  "pav:derivedFrom": "",
                  "skos:prefLabel": "Point Number",
                  "skos:altLabel": [],
                  "pav:version": "1.0.0",
                  "bibo:status": "bibo:draft",
                  "_valueConstraints": {
                    "numberType": "xsd:int",
                    "unitOfMeasure": "",
                    "requiredValue": false,
                    "multipleChoice": false
                  },
                  "_ui": {
                    "inputType": "numeric"
                  },
                  "pav:createdOn": null,
                  "pav:createdBy": null,
                  "pav:lastUpdatedOn": null,
                  "oslc:modifiedBy": null,
                  "type": "object",
                  "title": "Field(Point Number)",
                  "description": "Generated by CSV2CEDAR.",
                  "properties": {
                    "@type": {
                      "oneOf": [
                        {
                          "type": "string",
                          "format": "uri"
                        },
                        {
                          "type": "array",
                          "minItems": 1,
                          "items": {
                            "type": "string",
                            "format": "uri"
                          },
                          "uniqueItems": true
                        }
                      ]
                    },
                    "@value": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "rdfs:label": {
                      "type": [
                        "string",
                        "null"
                      ]
                    }
                  },
                  "additionalProperties": false,
                  "schema:schemaVersion": "1.6.0",
                  "@context": {
                    "xsd": "http://www.w3.org/2001/XMLSchema#",
                    "pav": "http://purl.org/pav/",
                    "bibo": "http://purl.org/ontology/bibo/",
                    "oslc": "http://open-services.net/ns/core#",
                    "schema": "http://schema.org/",
                    "skos": "http://www.w3.org/2004/02/skos/core#",
                    "schema:name": {
                      "@type": "xsd:string"
                    },
                    "schema:description": {
                      "@type": "xsd:string"
                    },
                    "skos:prefLabel": {
                      "@type": "xsd:string"
                    },
                    "skos:altLabel": {
                      "@type": "xsd:string"
                    },
                    "pav:createdOn": {
                      "@type": "xsd:dateTime"
                    },
                    "pav:createdBy": {
                      "@type": "@id"
                    },
                    "pav:lastUpdatedOn": {
                      "@type": "xsd:dateTime"
                    },
                    "oslc:modifiedBy": {
                      "@type": "@id"
                    }
                  },
                  "$schema": "http://json-schema.org/draft-04/schema#"
                },
                "Latitude": {
                  "@type": "https://schema.metadatacenter.org/core/TemplateField",
                  "@id": "urn:uuid:179437ce-009c-453e-9982-9bca5ceee960",
                  "schema:identifier": "latitude",
                  "schema:name": "Latitude",
                  "schema:description": "Location of this point in north latitude decimal degrees (southern latitudes are negative)\n\n37.5 specifies 37.5 degrees North (37 degrees and 30 minutes North)\n\n-5.5  specifies 5.5 degrees South (5 degrees and 30 minutes South)",
                  "pav:derivedFrom": "",
                  "skos:prefLabel": "Latitude",
                  "skos:altLabel": [],
                  "pav:version": "1.0.0",
                  "bibo:status": "bibo:draft",
                  "_valueConstraints": {
                    "numberType": "xsd:float",
                    "unitOfMeasure": "",
                    "requiredValue": false,
                    "multipleChoice": false
                  },
                  "_ui": {
                    "inputType": "numeric"
                  },
                  "pav:createdOn": null,
                  "pav:createdBy": null,
                  "pav:lastUpdatedOn": null,
                  "oslc:modifiedBy": null,
                  "type": "object",
                  "title": "Field(Latitude)",
                  "description": "Generated by CSV2CEDAR.",
                  "properties": {
                    "@type": {
                      "oneOf": [
                        {
                          "type": "string",
                          "format": "uri"
                        },
                        {
                          "type": "array",
                          "minItems": 1,
                          "items": {
                            "type": "string",
                            "format": "uri"
                          },
                          "uniqueItems": true
                        }
                      ]
                    },
                    "@value": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "rdfs:label": {
                      "type": [
                        "string",
                        "null"
                      ]
                    }
                  },
                  "additionalProperties": false,
                  "schema:schemaVersion": "1.6.0",
                  "@context": {
                    "xsd": "http://www.w3.org/2001/XMLSchema#",
                    "pav": "http://purl.org/pav/",
                    "bibo": "http://purl.org/ontology/bibo/",
                    "oslc": "http://open-services.net/ns/core#",
                    "schema": "http://schema.org/",
                    "skos": "http://www.w3.org/2004/02/skos/core#",
                    "schema:name": {
                      "@type": "xsd:string"
                    },
                    "schema:description": {
                      "@type": "xsd:string"
                    },
                    "skos:prefLabel": {
                      "@type": "xsd:string"
                    },
                    "skos:altLabel": {
                      "@type": "xsd:string"
                    },
                    "pav:createdOn": {
                      "@type": "xsd:dateTime"
                    },
                    "pav:createdBy": {
                      "@type": "@id"
                    },
                    "pav:lastUpdatedOn": {
                      "@type": "xsd:dateTime"
                    },
                    "oslc:modifiedBy": {
                      "@type": "@id"
                    }
                  },
                  "$schema": "http://json-schema.org/draft-04/schema#"
                },
                "Longitude": {
                  "@type": "https://schema.metadatacenter.org/core/TemplateField",
                  "@id": "urn:uuid:3a561109-0432-4988-a39c-6b00dad49568",
                  "schema:identifier": "longitude",
                  "schema:name": "Longitude",
                  "schema:description": "Location of this point in east longitude decimal degrees (western longitudes are negative)\n\n150.0 specifies 150 degrees East\n\n-122.0 specifies 122 degrees West",
                  "pav:derivedFrom": "",
                  "skos:prefLabel": "Longitude",
                  "skos:altLabel": [],
                  "pav:version": "1.0.0",
                  "bibo:status": "bibo:draft",
                  "_valueConstraints": {
                    "numberType": "xsd:float",
                    "unitOfMeasure": "",
                    "requiredValue": false,
                    "multipleChoice": false
                  },
                  "_ui": {
                    "inputType": "numeric"
                  },
                  "pav:createdOn": null,
                  "pav:createdBy": null,
                  "pav:lastUpdatedOn": null,
                  "oslc:modifiedBy": null,
                  "type": "object",
                  "title": "Field(Longitude)",
                  "description": "Generated by CSV2CEDAR.",
                  "properties": {
                    "@type": {
                      "oneOf": [
                        {
                          "type": "string",
                          "format": "uri"
                        },
                        {
                          "type": "array",
                          "minItems": 1,
                          "items": {
                            "type": "string",
                            "format": "uri"
                          },
                          "uniqueItems": true
                        }
                      ]
                    },
                    "@value": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "rdfs:label": {
                      "type": [
                        "string",
                        "null"
                      ]
                    }
                  },
                  "additionalProperties": false,
                  "schema:schemaVersion": "1.6.0",
                  "@context": {
                    "xsd": "http://www.w3.org/2001/XMLSchema#",
                    "pav": "http://purl.org/pav/",
                    "bibo": "http://purl.org/ontology/bibo/",
                    "oslc": "http://open-services.net/ns/core#",
                    "schema": "http://schema.org/",
                    "skos": "http://www.w3.org/2004/02/skos/core#",
                    "schema:name": {
                      "@type": "xsd:string"
                    },
                    "schema:description": {
                      "@type": "xsd:string"
                    },
                    "skos:prefLabel": {
                      "@type": "xsd:string"
                    },
                    "skos:altLabel": {
                      "@type": "xsd:string"
                    },
                    "pav:createdOn": {
                      "@type": "xsd:dateTime"
                    },
                    "pav:createdBy": {
                      "@type": "@id"
                    },
                    "pav:lastUpdatedOn": {
                      "@type": "xsd:dateTime"
                    },
                    "oslc:modifiedBy": {
                      "@type": "@id"
                    }
                  },
                  "$schema": "http://json-schema.org/draft-04/schema#"
                }
              },
              "multiValued": false,
              "required": [
                "@context",
                "@id",
                "Point Number",
                "Latitude",
                "Longitude"
              ],
              "additionalProperties": false,
              "schema:schemaVersion": "1.6.0",
              "@id": "http://example.org/419bf9e3-f8d5-49c9-bdff-18cd37026f93",
              "_ui": {
                "order": [
                  "Point Number",
                  "Latitude",
                  "Longitude"
                ],
                "propertyLabels": {
                  "Point Number": "Point Number",
                  "Latitude": "Latitude",
                  "Longitude": "Longitude"
                },
                "propertyDescriptions": {
                  "Point Number": "Monotonically increasing identifier of the point in the shape being defined (defined in clockwise order and containing the right side of the closed shape). The last point must be the same as the first point.",
                  "Latitude": "Location of this point in north latitude decimal degrees (southern latitudes are negative)\n\n37.5 specifies 37.5 degrees North (37 degrees and 30 minutes North)\n\n-5.5  specifies 5.5 degrees South (5 degrees and 30 minutes South)",
                  "Longitude": "Location of this point in east longitude decimal degrees (western longitudes are negative)\n\n150.0 specifies 150 degrees East\n\n-122.0 specifies 122 degrees West"
                }
              },
              "@context": {
                "xsd": "http://www.w3.org/2001/XMLSchema#",
                "pav": "http://purl.org/pav/",
                "bibo": "http://purl.org/ontology/bibo/",
                "oslc": "http://open-services.net/ns/core#",
                "schema": "http://schema.org/",
                "schema:name": {
                  "@type": "xsd:string"
                },
                "schema:description": {
                  "@type": "xsd:string"
                },
                "pav:createdOn": {
                  "@type": "xsd:dateTime"
                },
                "pav:createdBy": {
                  "@type": "@id"
                },
                "pav:lastUpdatedOn": {
                  "@type": "xsd:dateTime"
                },
                "oslc:modifiedBy": {
                  "@type": "@id"
                }
              },
              "schema:identifier": "bounding_shapes",
              "schema:name": "Bounding Shapes",
              "schema:description": "A list of geographical coordinates that specifies the external bounday of the polygon that describes the coverage of the data contained within the data file being described.",
              "pav:derivedFrom": "",
              "skos:prefLabel": "Bounding Shapes",
              "skos:altLabel": [],
              "pav:version": "1.0.0",
              "bibo:status": "bibo:draft",
              "pav:createdOn": null,
              "pav:createdBy": null,
              "pav:lastUpdatedOn": null,
              "oslc:modifiedBy": null,
              "$schema": "http://json-schema.org/draft-04/schema#"
            }
          },
          "Data File Geopolitical Coverage": {
            "type": "array",
            "minItems": 0,
            "items": {
              "@type": "https://schema.metadatacenter.org/core/TemplateElement",
              "type": "object",
              "title": "Element(Data File Geopolitical Coverage)",
              "description": "Generated by CSV2CEDAR.",
              "properties": {
                "@context": {
                  "properties": {
                    "Geopolitical region": {
                      "enum": [
                        "http://purl.org/radx-terms/metadata-terms/geographicalPlaceName"
                      ]
                    }
                  },
                  "type": "object",
                  "additionalProperties": false
                },
                "@id": {
                  "format": "uri",
                  "type": "string"
                },
                "@type": {
                  "oneOf": [
                    {
                      "format": "uri",
                      "type": "string"
                    },
                    {
                      "items": {
                        "format": "uri",
                        "type": "string"
                      },
                      "uniqueItems": true,
                      "minItems": 1,
                      "type": "array"
                    }
                  ]
                },
                "Geopolitical region": {
                  "type": "array",
                  "minItems": 0,
                  "items": {
                    "@type": "https://schema.metadatacenter.org/core/TemplateField",
                    "@id": "urn:uuid:0ff2a1d2-a9af-49f4-80b2-c55fc6af698b",
                    "schema:identifier": "geopolitical_region",
                    "schema:name": "Geopolitical region",
                    "schema:description": "Place name depicting a geopolitical region. Recommended practice is to use [Geonames](http://www.geonames.org/search.html) to find an identifier matching any particular place.",
                    "pav:derivedFrom": "",
                    "skos:prefLabel": "Geopolitical region",
                    "skos:altLabel": [],
                    "pav:version": "1.0.0",
                    "bibo:status": "bibo:draft",
                    "_valueConstraints": {
                      "defaultValue": "",
                      "requiredValue": false,
                      "multipleChoice": true
                    },
                    "_ui": {
                      "inputType": "textfield"
                    },
                    "pav:createdOn": null,
                    "pav:createdBy": null,
                    "pav:lastUpdatedOn": null,
                    "oslc:modifiedBy": null,
                    "type": "object",
                    "title": "Field(Geopolitical region)",
                    "description": "Generated by CSV2CEDAR.",
                    "properties": {
                      "@type": {
                        "oneOf": [
                          {
                            "type": "string",
                            "format": "uri"
                          },
                          {
                            "type": "array",
                            "minItems": 1,
                            "items": {
                              "type": "string",
                              "format": "uri"
                            },
                            "uniqueItems": true
                          }
                        ]
                      },
                      "@value": {
                        "type": [
                          "string",
                          "null"
                        ]
                      },
                      "rdfs:label": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    "additionalProperties": false,
                    "schema:schemaVersion": "1.6.0",
                    "@context": {
                      "xsd": "http://www.w3.org/2001/XMLSchema#",
                      "pav": "http://purl.org/pav/",
                      "bibo": "http://purl.org/ontology/bibo/",
                      "oslc": "http://open-services.net/ns/core#",
                      "schema": "http://schema.org/",
                      "skos": "http://www.w3.org/2004/02/skos/core#",
                      "schema:name": {
                        "@type": "xsd:string"
                      },
                      "schema:description": {
                        "@type": "xsd:string"
                      },
                      "skos:prefLabel": {
                        "@type": "xsd:string"
                      },
                      "skos:altLabel": {
                        "@type": "xsd:string"
                      },
                      "pav:createdOn": {
                        "@type": "xsd:dateTime"
                      },
                      "pav:createdBy": {
                        "@type": "@id"
                      },
                      "pav:lastUpdatedOn": {
                        "@type": "xsd:dateTime"
                      },
                      "oslc:modifiedBy": {
                        "@type": "@id"
                      }
                    },
                    "$schema": "http://json-schema.org/draft-04/schema#"
                  }
                }
              },
              "multiValued": false,
              "required": [
                "@context",
                "@id",
                "Geopolitical region"
              ],
              "additionalProperties": false,
              "schema:schemaVersion": "1.6.0",
              "@id": "http://example.org/1a6f6875-644c-4b54-ade1-93e8bbd54726",
              "_ui": {
                "order": [
                  "Geopolitical region"
                ],
                "propertyLabels": {
                  "Geopolitical region": "Geopolitical region"
                },
                "propertyDescriptions": {
                  "Geopolitical region": "Place name depicting a geopolitical region. Recommended practice is to use [Geonames](http://www.geonames.org/search.html) to find an identifier matching any particular place."
                }
              },
              "@context": {
                "xsd": "http://www.w3.org/2001/XMLSchema#",
                "pav": "http://purl.org/pav/",
                "bibo": "http://purl.org/ontology/bibo/",
                "oslc": "http://open-services.net/ns/core#",
                "schema": "http://schema.org/",
                "schema:name": {
                  "@type": "xsd:string"
                },
                "schema:description": {
                  "@type": "xsd:string"
                },
                "pav:createdOn": {
                  "@type": "xsd:dateTime"
                },
                "pav:createdBy": {
                  "@type": "@id"
                },
                "pav:lastUpdatedOn": {
                  "@type": "xsd:dateTime"
                },
                "oslc:modifiedBy": {
                  "@type": "@id"
                }
              },
              "schema:identifier": "data_file_geopolitical_coverage",
              "schema:name": "Data File Geopolitical Coverage",
              "schema:description": "A list of regions specified by the totality of one or more place names",
              "pav:derivedFrom": "",
              "skos:prefLabel": "Data File Geopolitical Coverage",
              "skos:altLabel": [],
              "pav:version": "1.0.0",
              "bibo:status": "bibo:draft",
              "pav:createdOn": null,
              "pav:createdBy": null,
              "pav:lastUpdatedOn": null,
              "oslc:modifiedBy": null,
              "$schema": "http://json-schema.org/draft-04/schema#"
            }
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Bounding Boxes",
          "Bounding Shapes",
          "Data File Geopolitical Coverage"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/81177d1c-519f-4f6a-93a2-3710b46db5ae",
        "_ui": {
          "order": [
            "Bounding Boxes",
            "Bounding Shapes",
            "Data File Geopolitical Coverage"
          ],
          "propertyLabels": {
            "Bounding Boxes": "Bounding Boxes",
            "Bounding Shapes": "Bounding Shapes",
            "Data File Geopolitical Coverage": "Data File Geopolitical Coverage"
          },
          "propertyDescriptions": {
            "Bounding Boxes": "A list of geographical bounding boxes that specifies the geographical coverage of the data contained within the data file associated with this metadata.",
            "Bounding Shapes": "A list of geographical coordinates that specifies the external bounday of the polygon that describes the coverage of the data contained within the data file being described.",
            "Data File Geopolitical Coverage": "A list of regions specified by the totality of one or more place names"
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_spatial_coverage",
        "schema:name": "Data File Spatial Coverage",
        "schema:description": "A list of geospatial descriptions that specify the geographical coverage of the data contained within the data file associated with this metadata.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Spatial Coverage",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "Data File Creators": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Creators)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Creator Type": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creatorType"
                ]
              },
              "Creator Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creatorName"
                ]
              },
              "Creator Given Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creatorGivenName"
                ]
              },
              "Creator Family Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creatorFamilyName"
                ]
              },
              "Creator Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creatorIdentifier"
                ]
              },
              "Creator Identifier Scheme": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creatorIdentifierScheme"
                ]
              },
              "Creator Email": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creatorEmail"
                ]
              },
              "Creator Affiliation": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creatorAffiliation"
                ]
              },
              "Creator Affiliation Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creatorAffiliationIdentifier"
                ]
              },
              "Creator Affiliation Identifier Scheme": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creatorAffiliationIdentifierScheme"
                ]
              },
              "Creator Role": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creatorRole"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Creator Affiliation Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:17f16d1a-7519-4381-ba78-803fa15b1d03",
            "schema:identifier": "creator_affiliation_identifier",
            "schema:name": "Creator Affiliation Identifier",
            "schema:description": "Globally unique string that identifies the organizational affiliation of the contributor.  \n\nWe suggest that you an identifier from the [Research Organization Registry (ROR)](https://ror.org), a community-led project to develop an open, sustainable, usable, and unique identifier for every research organization in the world.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Creator Affiliation Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Creator Affiliation Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Creator Role": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:3d2e7818-5097-4432-821c-3db0c2ee71bd",
            "schema:identifier": "creator_role",
            "schema:name": "Creator Role",
            "schema:description": "The role of the Person or the Organization in relation to the data file creation.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Creator Role",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/ContributorRole",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Creator Role)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Creator Given Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:6b73d61a-85c7-44c2-85eb-8df25694e75d",
            "schema:identifier": "creator_given_name",
            "schema:name": "Creator Given Name",
            "schema:description": "If the creator is a person, the personal name(s) of the creator (e.g., first and optionally middle name in Western languagues, optionally middle and last name in Asian languages).",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Creator Given Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Creator Given Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Creator Email": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:364d4c82-f1dd-43ce-bf42-cea034f417a8",
            "schema:identifier": "creator_email",
            "schema:name": "Creator Email",
            "schema:description": "The email address of the creator.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Creator Email",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "email"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Creator Email)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Creator Type": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:079f6d5b-68cb-4492-8d71-70c498531fe5",
            "schema:identifier": "creator_type",
            "schema:name": "Creator Type",
            "schema:description": "The type of the creator. This is either a Person or an Organization.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Creator Type",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/ResourceCreatorType",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": [],
              "defaultValue": {
                "termUri": "http://vocab.fairdatacollective.org/gdmt/Person",
                "rdfs:label": "Person"
              }
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Creator Type)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Creator Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:fab3443b-cd04-41c6-b9c6-cda9dda8a2d6",
            "schema:identifier": "creator_identifier",
            "schema:name": "Creator Identifier",
            "schema:description": "Globally unique string that identifies the creator (an individual or legal entity). For individuals, this is typically an ORCID; for research organizations, it is typically an ROR.\n\nThe ORCID iD is an https IRI with a 16-digit number that is compatible with the ISO Standard (ISO 27729), also known as the International Standard Name Identifier (ISNI), e.g. https://orcid.org/0000-0001-2345-6789 \n\n_[ORCID](https://orcid.org) provides a persistent digital identifier (an ORCID iD) that distinguishes each researcher from every other researcher. You can connect your iD with your professional information—affiliations, grants, publications, peer review, and more. You can use your iD to share your information with other systems, ensuring you get recognition for all your contributions, saving you time and hassle, and reducing the risk of errors._\n\nThe ROR is an https IRI that uniquely identifies most research organizatiions. \n\n_The [Research Organization Registry (ROR)](https://ror.org) is a community-led project to develop an open, sustainable, usable, and unique identifier for every research organization in the world._",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Creator Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Creator Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Creator Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:d7bf03fd-1d42-48f1-b132-7b55c6a918b7",
            "schema:identifier": "creator_name",
            "schema:name": "Creator Name",
            "schema:description": "The full name of the creator. For a person this is the combination of the given name and family name, in the appropriate order.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Creator Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Creator Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Creator Affiliation": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:10d230fc-2e0e-457c-8745-aaf22d08c692",
            "schema:identifier": "creator_affiliation",
            "schema:name": "Creator Affiliation",
            "schema:description": "If the creator is a Person who is affiliated with an instition then this field should specify the institution.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Creator Affiliation",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Creator Affiliation)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Creator Identifier Scheme": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:5baae945-06aa-4b84-a0de-58f43505336b",
            "schema:identifier": "creator_identifier_scheme",
            "schema:name": "Creator Identifier Scheme",
            "schema:description": "",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Creator Identifier Scheme",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierScheme",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Creator Identifier Scheme)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Creator Family Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:ca75d165-cd15-43ad-a297-e8d259b61211",
            "schema:identifier": "creator_family_name",
            "schema:name": "Creator Family Name",
            "schema:description": "If the creator is a person, the surname(s) of the creator (e.g., last name in Western languagues, first name in Asian languages).",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Creator Family Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Creator Family Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Creator Affiliation Identifier Scheme": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:30d5809c-2fbe-44bf-998e-afcfec763600",
            "schema:identifier": "creator_affiliation_identifier_scheme",
            "schema:name": "Creator Affiliation Identifier Scheme",
            "schema:description": "The name of the scheme or authority used for the Creator Affiliation Identifier.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Creator Affiliation Identifier Scheme",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "requiredValue": false,
              "multipleChoice": false,
              "classes": [],
              "branches": [
                {
                  "source": "https://bioportal.bioontology.org/ontologies/FDC-GDMT",
                  "acronym": "FDC-GDMT",
                  "name": "FDC-GDMT",
                  "uri": "http://vocab.fairdatacollective.org/gdmt/IdentifierScheme",
                  "maxDepth": 2147483647
                }
              ],
              "ontologies": [],
              "literals": []
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Creator Affiliation Identifier Scheme)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "@id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Creator Type",
          "Creator Name",
          "Creator Given Name",
          "Creator Family Name",
          "Creator Identifier",
          "Creator Identifier Scheme",
          "Creator Email",
          "Creator Affiliation",
          "Creator Affiliation Identifier",
          "Creator Affiliation Identifier Scheme",
          "Creator Role"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/515e35f0-7612-4b82-9d80-e03542c73f17",
        "_ui": {
          "order": [
            "Creator Type",
            "Creator Name",
            "Creator Given Name",
            "Creator Family Name",
            "Creator Identifier",
            "Creator Identifier Scheme",
            "Creator Email",
            "Creator Affiliation",
            "Creator Affiliation Identifier",
            "Creator Affiliation Identifier Scheme",
            "Creator Role"
          ],
          "propertyLabels": {
            "Creator Type": "Creator Type",
            "Creator Name": "Creator Name",
            "Creator Given Name": "Creator Given Name",
            "Creator Family Name": "Creator Family Name",
            "Creator Identifier": "Creator Identifier",
            "Creator Identifier Scheme": "Creator Identifier Scheme",
            "Creator Email": "Creator Email",
            "Creator Affiliation": "Creator Affiliation",
            "Creator Affiliation Identifier": "Creator Affiliation Identifier",
            "Creator Affiliation Identifier Scheme": "Creator Affiliation Identifier Scheme",
            "Creator Role": "Creator Role"
          },
          "propertyDescriptions": {
            "Creator Type": "The type of the creator. This is either a Person or an Organization.",
            "Creator Name": "The full name of the creator. For a person this is the combination of the given name and family name, in the appropriate order.",
            "Creator Given Name": "If the creator is a person, the personal name(s) of the creator (e.g., first and optionally middle name in Western languagues, optionally middle and last name in Asian languages).",
            "Creator Family Name": "If the creator is a person, the surname(s) of the creator (e.g., last name in Western languagues, first name in Asian languages).",
            "Creator Identifier": "Globally unique string that identifies the creator (an individual or legal entity). For individuals, this is typically an ORCID; for research organizations, it is typically an ROR.\n\nThe ORCID iD is an https IRI with a 16-digit number that is compatible with the ISO Standard (ISO 27729), also known as the International Standard Name Identifier (ISNI), e.g. https://orcid.org/0000-0001-2345-6789 \n\n_[ORCID](https://orcid.org) provides a persistent digital identifier (an ORCID iD) that distinguishes each researcher from every other researcher. You can connect your iD with your professional information—affiliations, grants, publications, peer review, and more. You can use your iD to share your information with other systems, ensuring you get recognition for all your contributions, saving you time and hassle, and reducing the risk of errors._\n\nThe ROR is an https IRI that uniquely identifies most research organizatiions. \n\n_The [Research Organization Registry (ROR)](https://ror.org) is a community-led project to develop an open, sustainable, usable, and unique identifier for every research organization in the world._",
            "Creator Identifier Scheme": "",
            "Creator Email": "The email address of the creator.",
            "Creator Affiliation": "If the creator is a Person who is affiliated with an instition then this field should specify the institution.",
            "Creator Affiliation Identifier": "Globally unique string that identifies the organizational affiliation of the contributor.  \n\nWe suggest that you an identifier from the [Research Organization Registry (ROR)](https://ror.org), a community-led project to develop an open, sustainable, usable, and unique identifier for every research organization in the world.",
            "Creator Affiliation Identifier Scheme": "The name of the scheme or authority used for the Creator Affiliation Identifier.",
            "Creator Role": "The role of the Person or the Organization in relation to the data file creation."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_creators",
        "schema:name": "Data File Creators",
        "schema:description": "A list of people and/or organizations that created the data file.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Creators",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "Data File Data Dictionary": {
      "@type": "https://schema.metadatacenter.org/core/TemplateElement",
      "type": "object",
      "title": "Element(Data File Data Dictionary)",
      "description": "Generated by CSV2CEDAR.",
      "properties": {
        "@context": {
          "properties": {
            "Data Dictionary File Name": {
              "enum": [
                "http://purl.org/radx-terms/metadata-terms/dataDictionaryFileName"
              ]
            }
          },
          "type": "object",
          "additionalProperties": false
        },
        "@id": {
          "format": "uri",
          "type": "string"
        },
        "@type": {
          "oneOf": [
            {
              "format": "uri",
              "type": "string"
            },
            {
              "items": {
                "format": "uri",
                "type": "string"
              },
              "uniqueItems": true,
              "minItems": 1,
              "type": "array"
            }
          ]
        },
        "Data Dictionary File Name": {
          "@type": "https://schema.metadatacenter.org/core/TemplateField",
          "@id": "urn:uuid:7b398830-aac6-4467-9f1a-dd60343291db",
          "schema:identifier": "data_dictionary_file_name",
          "schema:name": "Data Dictionary File Name",
          "schema:description": "The file name of the Data Dictionary file that defines the Data File's data elements.\n\nEach Data File submitted should have its own data dictionary. For example, survery_results_origcopy.csv and survery_results_transformcopy.csv should both have data dictionary files (survery_results_origcopy_DICT.csv and survery_results_transformcopy_DICT.csv) associated with them. ",
          "pav:derivedFrom": "",
          "skos:prefLabel": "Data Dictionary File Name",
          "skos:altLabel": [],
          "pav:version": "1.0.0",
          "bibo:status": "bibo:draft",
          "_valueConstraints": {
            "defaultValue": "",
            "requiredValue": false,
            "multipleChoice": false
          },
          "_ui": {
            "inputType": "textfield"
          },
          "pav:createdOn": null,
          "pav:createdBy": null,
          "pav:lastUpdatedOn": null,
          "oslc:modifiedBy": null,
          "type": "object",
          "title": "Field(Data Dictionary File Name)",
          "description": "Generated by CSV2CEDAR.",
          "properties": {
            "@type": {
              "oneOf": [
                {
                  "type": "string",
                  "format": "uri"
                },
                {
                  "type": "array",
                  "minItems": 1,
                  "items": {
                    "type": "string",
                    "format": "uri"
                  },
                  "uniqueItems": true
                }
              ]
            },
            "@value": {
              "type": [
                "string",
                "null"
              ]
            },
            "rdfs:label": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "additionalProperties": false,
          "schema:schemaVersion": "1.6.0",
          "@context": {
            "xsd": "http://www.w3.org/2001/XMLSchema#",
            "pav": "http://purl.org/pav/",
            "bibo": "http://purl.org/ontology/bibo/",
            "oslc": "http://open-services.net/ns/core#",
            "schema": "http://schema.org/",
            "skos": "http://www.w3.org/2004/02/skos/core#",
            "schema:name": {
              "@type": "xsd:string"
            },
            "schema:description": {
              "@type": "xsd:string"
            },
            "skos:prefLabel": {
              "@type": "xsd:string"
            },
            "skos:altLabel": {
              "@type": "xsd:string"
            },
            "pav:createdOn": {
              "@type": "xsd:dateTime"
            },
            "pav:createdBy": {
              "@type": "@id"
            },
            "pav:lastUpdatedOn": {
              "@type": "xsd:dateTime"
            },
            "oslc:modifiedBy": {
              "@type": "@id"
            }
          },
          "$schema": "http://json-schema.org/draft-04/schema#"
        }
      },
      "multiValued": false,
      "required": [
        "@context",
        "@id",
        "Data Dictionary File Name"
      ],
      "additionalProperties": false,
      "schema:schemaVersion": "1.6.0",
      "@id": "http://example.org/ed574300-6dac-48db-b32c-36c1c3b7e175",
      "_ui": {
        "order": [
          "Data Dictionary File Name"
        ],
        "propertyLabels": {
          "Data Dictionary File Name": "Data Dictionary File Name"
        },
        "propertyDescriptions": {
          "Data Dictionary File Name": "The file name of the Data Dictionary file that defines the Data File's data elements.\n\nEach Data File submitted should have its own data dictionary. For example, survery_results_origcopy.csv and survery_results_transformcopy.csv should both have data dictionary files (survery_results_origcopy_DICT.csv and survery_results_transformcopy_DICT.csv) associated with them. "
        }
      },
      "@context": {
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "pav": "http://purl.org/pav/",
        "bibo": "http://purl.org/ontology/bibo/",
        "oslc": "http://open-services.net/ns/core#",
        "schema": "http://schema.org/",
        "schema:name": {
          "@type": "xsd:string"
        },
        "schema:description": {
          "@type": "xsd:string"
        },
        "pav:createdOn": {
          "@type": "xsd:dateTime"
        },
        "pav:createdBy": {
          "@type": "@id"
        },
        "pav:lastUpdatedOn": {
          "@type": "xsd:dateTime"
        },
        "oslc:modifiedBy": {
          "@type": "@id"
        }
      },
      "schema:identifier": "data_file_data_dictionary",
      "schema:name": "Data File Data Dictionary",
      "schema:description": "Information about the Data Dictionary associated with the Data File",
      "pav:derivedFrom": "",
      "skos:prefLabel": "Data File Data Dictionary",
      "skos:altLabel": [],
      "pav:version": "1.0.0",
      "bibo:status": "bibo:draft",
      "pav:createdOn": "2023-09-28T12:06:59-07:00",
      "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
      "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
      "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
      "$schema": "http://json-schema.org/draft-04/schema#"
    },
    "schema:isBasedOn": {
      "type": "string",
      "format": "uri"
    },
    "schema:description": {
      "type": "string"
    },
    "pav:lastUpdatedOn": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "schema:name": {
      "type": "string",
      "minLength": 1
    },
    "Data File Creation Processes": {
      "type": "array",
      "minItems": 0,
      "items": {
        "@type": "https://schema.metadatacenter.org/core/TemplateElement",
        "type": "object",
        "title": "Element(Data File Creation Processes)",
        "description": "Generated by CSV2CEDAR.",
        "properties": {
          "@context": {
            "properties": {
              "Process Name": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creationProcessName"
                ]
              },
              "Process IRI": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creationProcessIri"
                ]
              },
              "Process Version": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creationProcessVersion"
                ]
              },
              "Process Execution Identifier": {
                "enum": [
                  "http://purl.org/radx-terms/metadata-terms/creationProcessExecutionIdentifier"
                ]
              }
            },
            "type": "object",
            "additionalProperties": false
          },
          "@id": {
            "format": "uri",
            "type": "string"
          },
          "@type": {
            "oneOf": [
              {
                "format": "uri",
                "type": "string"
              },
              {
                "items": {
                  "format": "uri",
                  "type": "string"
                },
                "uniqueItems": true,
                "minItems": 1,
                "type": "array"
              }
            ]
          },
          "Process Version": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:aa8c1697-e4a1-49a1-b021-2aee5f7353d6",
            "schema:identifier": "process_version",
            "schema:name": "Process Version",
            "schema:description": "Version of the process used to make this data file, typically a string (e.g., '3.0.3'). It may be a software release tag, e.g., in GitHub.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Process Version",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Process Version)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Process Execution Identifier": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:e6a83130-a1b8-4943-82d8-ac15208f23cb",
            "schema:identifier": "process_execution_identifier",
            "schema:name": "Process Execution Identifier",
            "schema:description": "Identification of the particular run of the process used to make this data file. \n\nThis is a deterministic string; in software, typically it is either a timestamp combined with the machine on which the software was executed; or a unique identifier generated by the controlling software for each run of the process.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Process Execution Identifier",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Process Execution Identifier)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Process IRI": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:e69a2dee-4055-4a30-b212-75d72435a24c",
            "schema:identifier": "process_iri",
            "schema:name": "Process IRI",
            "schema:description": "Unique identifier (IRI) for the process used to make the data file or product (preferably a resolvable and persistent identifier). ",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Process IRI",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Process IRI)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          },
          "Process Name": {
            "@type": "https://schema.metadatacenter.org/core/TemplateField",
            "@id": "urn:uuid:555421d0-3a2e-4971-abde-86bb8c737830",
            "schema:identifier": "process_name",
            "schema:name": "Process Name",
            "schema:description": "Full name of the process that operates to make the data file or product.",
            "pav:derivedFrom": "",
            "skos:prefLabel": "Process Name",
            "skos:altLabel": [],
            "pav:version": "1.0.0",
            "bibo:status": "bibo:draft",
            "_valueConstraints": {
              "defaultValue": "",
              "requiredValue": false,
              "multipleChoice": false
            },
            "_ui": {
              "inputType": "textfield"
            },
            "pav:createdOn": null,
            "pav:createdBy": null,
            "pav:lastUpdatedOn": null,
            "oslc:modifiedBy": null,
            "type": "object",
            "title": "Field(Process Name)",
            "description": "Generated by CSV2CEDAR.",
            "properties": {
              "@type": {
                "oneOf": [
                  {
                    "type": "string",
                    "format": "uri"
                  },
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "uniqueItems": true
                  }
                ]
              },
              "@value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "rdfs:label": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "additionalProperties": false,
            "schema:schemaVersion": "1.6.0",
            "@context": {
              "xsd": "http://www.w3.org/2001/XMLSchema#",
              "pav": "http://purl.org/pav/",
              "bibo": "http://purl.org/ontology/bibo/",
              "oslc": "http://open-services.net/ns/core#",
              "schema": "http://schema.org/",
              "skos": "http://www.w3.org/2004/02/skos/core#",
              "schema:name": {
                "@type": "xsd:string"
              },
              "schema:description": {
                "@type": "xsd:string"
              },
              "skos:prefLabel": {
                "@type": "xsd:string"
              },
              "skos:altLabel": {
                "@type": "xsd:string"
              },
              "pav:createdOn": {
                "@type": "xsd:dateTime"
              },
              "pav:createdBy": {
                "@type": "@id"
              },
              "pav:lastUpdatedOn": {
                "@type": "xsd:dateTime"
              },
              "oslc:modifiedBy": {
                "@type": "@id"
              }
            },
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "multiValued": false,
        "required": [
          "@context",
          "@id",
          "Process Name",
          "Process IRI",
          "Process Version",
          "Process Execution Identifier"
        ],
        "additionalProperties": false,
        "schema:schemaVersion": "1.6.0",
        "@id": "http://example.org/30debb95-22c1-465e-a61a-c10c78761181",
        "_ui": {
          "order": [
            "Process Name",
            "Process IRI",
            "Process Version",
            "Process Execution Identifier"
          ],
          "propertyLabels": {
            "Process Name": "Process Name",
            "Process IRI": "Process IRI",
            "Process Version": "Process Version",
            "Process Execution Identifier": "Process Execution Identifier"
          },
          "propertyDescriptions": {
            "Process Name": "Full name of the process that operates to make the data file or product.",
            "Process IRI": "Unique identifier (IRI) for the process used to make the data file or product (preferably a resolvable and persistent identifier). ",
            "Process Version": "Version of the process used to make this data file, typically a string (e.g., '3.0.3'). It may be a software release tag, e.g., in GitHub.",
            "Process Execution Identifier": "Identification of the particular run of the process used to make this data file. \n\nThis is a deterministic string; in software, typically it is either a timestamp combined with the machine on which the software was executed; or a unique identifier generated by the controlling software for each run of the process."
          }
        },
        "@context": {
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "pav": "http://purl.org/pav/",
          "bibo": "http://purl.org/ontology/bibo/",
          "oslc": "http://open-services.net/ns/core#",
          "schema": "http://schema.org/",
          "schema:name": {
            "@type": "xsd:string"
          },
          "schema:description": {
            "@type": "xsd:string"
          },
          "pav:createdOn": {
            "@type": "xsd:dateTime"
          },
          "pav:createdBy": {
            "@type": "@id"
          },
          "pav:lastUpdatedOn": {
            "@type": "xsd:dateTime"
          },
          "oslc:modifiedBy": {
            "@type": "@id"
          }
        },
        "schema:identifier": "data_file_creation_processes",
        "schema:name": "Data File Creation Processes",
        "schema:description": "A list of processes (activities) used to make the data file.",
        "pav:derivedFrom": "",
        "skos:prefLabel": "Data File Creation Processes",
        "skos:altLabel": [],
        "pav:version": "1.0.0",
        "bibo:status": "bibo:draft",
        "pav:createdOn": "2023-09-28T12:06:59-07:00",
        "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
        "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
        "$schema": "http://json-schema.org/draft-04/schema#"
      }
    },
    "pav:derivedFrom": {
      "type": "string",
      "format": "uri"
    }
  },
  "required": [
    "@context",
    "@id",
    "schema:isBasedOn",
    "schema:name",
    "schema:description",
    "pav:createdOn",
    "pav:createdBy",
    "pav:lastUpdatedOn",
    "oslc:modifiedBy",
    "Data File Titles",
    "Data File Identity",
    "Data File Language",
    "Data File Subjects",
    "Data File Descriptions",
    "Data File Data Dictionary",
    "Data File Creators",
    "Data File Related Resources",
    "Data File Contributors",
    "Data File Rights",
    "Data File Dates",
    "Data File Parent Studies",
    "Data File Funding Sources",
    "Data File Distributions",
    "Data Characteristics Summary",
    "Data Sources",
    "Data Streams",
    "Data File Creation Processes",
    "Data File Temporal Coverage",
    "Data File Spatial Coverage",
    "Data File Elevation Coverage",
    "Auxiliary Metadata"
  ],
  "multiValued": false,
  "additionalProperties": false,
  "schema:identifier": "radx-metadata-specification",
  "schema:name": "RADx Metadata Specification",
  "schema:description": "Template generated by CEDARCSV",
  "pav:derivedFrom": "",
  "skos:prefLabel": "RADx Metadata Specification",
  "skos:altLabel": [],
  "pav:version": "1.0.0",
  "bibo:status": "bibo:draft",
  "pav:createdOn": "2023-09-28T12:06:59-07:00",
  "pav:createdBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
  "pav:lastUpdatedOn": "2023-09-28T12:06:59-07:00",
  "oslc:modifiedBy": "https://metadatacenter.org/users/819b3cfd-49a9-4e72-b5d5-18166366f014",
  "@context": {
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "pav": "http://purl.org/pav/",
    "bibo": "http://purl.org/ontology/bibo/",
    "oslc": "http://open-services.net/ns/core#",
    "schema": "http://schema.org/",
    "schema:name": {
      "@type": "xsd:string"
    },
    "schema:description": {
      "@type": "xsd:string"
    },
    "pav:createdOn": {
      "@type": "xsd:dateTime"
    },
    "pav:createdBy": {
      "@type": "@id"
    },
    "pav:lastUpdatedOn": {
      "@type": "xsd:dateTime"
    },
    "oslc:modifiedBy": {
      "@type": "@id"
    }
  },
  "@type": "https://schema.metadatacenter.org/core/Template",
  "schema:schemaVersion": "1.6.0",
  "$schema": "http://json-schema.org/draft-04/schema#"
};
