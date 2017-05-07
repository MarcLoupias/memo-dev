
#### ADD TAG
after a commit creating a tag :
`git tag -a v1.4 -m 'my version 1.4'```

then push to remote master

then push the tags to remote master :
`git push --tags`

#### LIST TAGS
`git tag`

#### DELETE TAG
locally
`git tag -d 0.0.1`
then on the remote
`git push origin :refs/tags/0.0.1`

