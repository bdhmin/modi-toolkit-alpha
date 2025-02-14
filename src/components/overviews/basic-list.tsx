import { Attribute, Layout } from '../../spec/spec';

export const BasicList = (config: {
  attributeOrganizations: {
    title: Attribute[];
    thumbnail: Attribute[];
    subtitle: Attribute[];
    descriptions: Attribute[];
    keyPoints: Attribute[];
    buttons: Attribute[];
    additionalInfo: Attribute[];
  }[];
}): Layout => ({
  label: 'basic-list',
  anchorAttributeConditions: [() => true],
  attributeOrganizations: config.attributeOrganizations,
});
