// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Webrizen Administration')
    .items([
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('tool').title('Tools'),
      S.documentTypeListItem('article').title('Articles'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['project', 'tool', 'article', 'author'].includes(item.getId()),
      ),
    ])