export const SAMPLE_INSTANCE = {
  'Data Characteristics Summary': {
    '@context': {
      'Data Characteristics Table in HTML':
        'http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInHtml',
      'Data Characteristics Table in CSV':
        'http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInCsv',
      'Data Characteristics Table in TSV':
        'http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInTsv',
    },
    'Data Characteristics Table in CSV': {
      '@value': null,
    },
    'Data Characteristics Table in TSV': {
      '@value': null,
    },
    'Data Characteristics Table in Key-Value Pairs': [],
    'Data Characteristics Table in HTML': {
      '@value': null,
    },
    '@id':
      'https://repo.metadatacenter.org/template-element-instances/0afce029-957c-418f-8965-49c13c19480a',
  },
  'Data Streams': [],
  'Data File Identity': {
    '@context': {
      Identifier: 'http://purl.org/radx-terms/metadata-terms/identifier',
      'Identifier Type':
        'http://purl.org/radx-terms/metadata-terms/identifierType',
      'File Name': 'http://purl.org/radx-terms/metadata-terms/fileName',
      Version: 'http://purl.org/radx-terms/metadata-terms/version',
      'SHA256 digest': 'https://purl.org/radx-terms/sha256',
    },
    'Identifier Type': {},
    Identifier: {
      '@value': null,
    },
    'SHA256 digest': {
      '@value': null,
    },
    Version: {
      '@value': null,
    },
    'File Name': {
      '@value': null,
    },
    '@id':
      'https://repo.metadatacenter.org/template-element-instances/41c86bf5-4af9-4b76-a4b9-3622b59a7ce0',
  },
  'Auxiliary Metadata': {
    '@context': {
      'Additional Commentary':
        'http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataCommentary',
    },
    'Additional Commentary': [
      {
        '@value': null,
      },
    ],
    'Data File Descriptive Key-Value Pairs': [],
    '@id':
      'https://repo.metadatacenter.org/template-element-instances/61f4fbde-d0d9-4a70-964e-b4806473ce62',
  },
  'Data File Funding Sources': [],
  'Data File Language': {
    '@context': {
      'Primary Language':
        'http://purl.org/radx-terms/metadata-terms/primaryLanguage',
      'Other Languages':
        'http://purl.org/radx-terms/metadata-terms/otherLanguage',
    },
    'Primary Language': {
      '@value': 'en',
    },
    'Other Languages': [
      {
        '@value': null,
      },
    ],
    '@id':
      'https://repo.metadatacenter.org/template-element-instances/8dda8f5a-43e8-48fd-a0d0-0b3fc89e0c7a',
  },
  'Data File Subjects': [],
  'Data File Parent Studies': [],
  'Data File Titles': [],
  'Data File Elevation Coverage': [],
  'Data File Related Resources': [],
  'Data File Descriptions': [],
  'Data File Rights': [],
  'Data File Contributors': [],
  'Data Sources': [],
  'Data File Distributions': [],
  'Data File Temporal Coverage': [],
  '@context': {
    schema: 'http://schema.org/',
    'Data Characteristics Summary':
      'http://purl.org/radx-terms/metadata-terms/dataCharacteristicsDescriptor',
    'Data Streams':
      'http://purl.org/radx-terms/metadata-terms/dataStreamDescriptor',
    'Data File Identity':
      'http://purl.org/radx-terms/metadata-terms/identityDescriptor',
    'Auxiliary Metadata':
      'http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataDescriptor',
    xsd: 'http://www.w3.org/2001/XMLSchema#',
    'pav:createdOn': {
      '@type': 'xsd:dateTime',
    },
    skos: 'http://www.w3.org/2004/02/skos/core#',
    rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
    'Data File Funding Sources':
      'http://purl.org/radx-terms/metadata-terms/fundingSourceDescriptor',
    'pav:createdBy': {
      '@type': '@id',
    },
    'Data File Language':
      'http://purl.org/radx-terms/metadata-terms/languageDescriptor',
    'rdfs:label': {
      '@type': 'xsd:string',
    },
    'Data File Subjects':
      'http://purl.org/radx-terms/metadata-terms/subjectsAndKeywordsDescriptor',
    'oslc:modifiedBy': {
      '@type': '@id',
    },
    'skos:notation': {
      '@type': 'xsd:string',
    },
    'Data File Parent Studies':
      'http://purl.org/radx-terms/metadata-terms/parentStudyDescriptor',
    'Data File Titles':
      'http://purl.org/radx-terms/metadata-terms/titleDescriptor',
    'Data File Elevation Coverage':
      'http://purl.org/radx-terms/metadata-terms/elevationCoverageDescriptor',
    'Data File Related Resources':
      'http://purl.org/radx-terms/metadata-terms/relatedResourceDescriptor',
    'Data File Descriptions':
      'http://purl.org/radx-terms/metadata-terms/descriptionDescriptor',
    'Data File Rights':
      'http://purl.org/radx-terms/metadata-terms/rightsDescriptor',
    pav: 'http://purl.org/pav/',
    'Data File Contributors':
      'http://purl.org/radx-terms/metadata-terms/contributorDescriptor',
    'Data Sources':
      'http://purl.org/radx-terms/metadata-terms/dataSourceDescriptor',
    'Data File Distributions':
      'http://purl.org/radx-terms/metadata-terms/distributionDescriptor',
    'Data File Temporal Coverage':
      'http://purl.org/radx-terms/metadata-terms/temporalCoverageDescriptor',
    oslc: 'http://open-services.net/ns/core#',
    'Data File Dates':
      'http://purl.org/radx-terms/metadata-terms/eventsDescriptor',
    'Data File Spatial Coverage':
      'http://purl.org/radx-terms/metadata-terms/spatialCoverageDescriptor',
    'Data File Creators':
      'http://purl.org/radx-terms/metadata-terms/creatorDescriptor',
    'Data File Data Dictionary':
      'http://purl.org/radx-terms/metadata-terms/dataDictionaryDescriptor',
    'schema:isBasedOn': {
      '@type': '@id',
    },
    'schema:description': {
      '@type': 'xsd:string',
    },
    'pav:lastUpdatedOn': {
      '@type': 'xsd:dateTime',
    },
    'schema:name': {
      '@type': 'xsd:string',
    },
    'Data File Creation Processes':
      'http://purl.org/radx-terms/metadata-terms/dataFileCreationProcessDescriptor',
    'pav:derivedFrom': {
      '@type': '@id',
    },
  },
  'Data File Dates': [],
  'Data File Spatial Coverage': [],
  'Data File Creators': [],
  'Data File Data Dictionary': {
    '@context': {
      'Data Dictionary File Name':
        'http://purl.org/radx-terms/metadata-terms/dataDictionaryFileName',
    },
    'Data Dictionary File Name': {
      '@value': null,
    },
    '@id':
      'https://repo.metadatacenter.org/template-element-instances/707df637-74d6-40a8-ba00-56447bb8c653',
  },
  'Data File Creation Processes': [],
  'schema:isBasedOn':
    'https://repo.metadatacenter.org/templates/c71fa3cc-eeff-4d61-836f-dce094afa84c',
  'schema:name': 'RADx Metadata Specification metadata',
  'schema:description': 'Template generated by CEDARCSV',
  'pav:createdOn': '2023-10-02T17:43:33-07:00',
  'pav:createdBy':
    'https://metadatacenter.org/users/30449a1f-80a8-4b54-a3fa-92d4d6157116',
  'pav:lastUpdatedOn': '2023-10-02T17:43:33-07:00',
  'oslc:modifiedBy':
    'https://metadatacenter.org/users/30449a1f-80a8-4b54-a3fa-92d4d6157116',
  '@id':
    'https://repo.metadatacenter.org/template-instances/f1b94529-0e3b-4775-a46a-a3dc8614c5c0',
};
