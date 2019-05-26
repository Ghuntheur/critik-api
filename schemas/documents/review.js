import icon from 'react-icons/lib/md/add-a-photo';

import { ERRORS } from '../../constants/errors.constants';

export default {
  name: 'review',
  title: 'Critique',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required().error(ERRORS.REQUIRED)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      },
      validation: Rule => Rule.required().error(ERRORS.REQUIRED)
    },
    {
      name: 'type',
      title: 'Type de contenu',
      type: 'string',
      options: {
        list: [
          { title: 'Série', value: 'series' },
          { title: 'Film', value: 'movies' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      validation: Rule => Rule.required().error(ERRORS.REQUIRED)
    },
    {
      name: 'image',
      title: 'Image de couverture',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required().error(ERRORS.REQUIRED)
    },
    {
      name: 'body',
      title: 'Critique',
      type: 'blockContent',
      validation: Rule => Rule.required().error(ERRORS.REQUIRED)
    },
    {
      name: 'score',
      title: 'Note',
      type: 'number',
      validation: Rule => [
        Rule.required().error(ERRORS.REQUIRED),
        Rule.positive()
          .max(20)
          .precision(1)
      ]
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: Rule => Rule.required().error(ERRORS.REQUIRED)
    },
    {
      name: 'published',
      title: 'Publié ?',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      score: 'score',
      author: 'author.name'
    },
    prepare: selection => {
      const { title, media, score, author } = selection;
      return {
        title,
        media,
        subtitle: `(${score}/20) - ${author}`
      };
    }
  }
};
