import icon from 'react-icons/lib/md/person';

import { ERRORS } from '../../constants/errors.constants';

export default {
  name: 'author',
  title: 'Auteur',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: Rule => Rule.required().error(ERRORS.REQUIRED)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      },
      validation: Rule => Rule.required().error(ERRORS.REQUIRED)
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required().error(ERRORS.REQUIRED)
    },
    {
      name: 'bio',
      title: 'Biographie',
      type: 'text',
      validation: Rule => Rule.required().error(ERRORS.REQUIRED)
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
};
