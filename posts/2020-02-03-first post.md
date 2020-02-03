# Another test
```javascript
const Project = props => {
  const {
    project: { name, full_name, html_url, has_pages, owner },
    classes
  } = props;
  const icon_src = `https://raw.githubusercontent.com/${full_name}/website/icon.png`;
  const pages_url = `https://${owner.login}.github.io/${name}`;
  const site = has_pages ? (
    <Button variant="contained" color="secondary" href={pages_url}>
      View Site
    </Button>
  ) : null;
```
