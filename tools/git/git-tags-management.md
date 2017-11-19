
# tags management

## add a tag

```bash
# create a tag on the current HEAD
$ git tag -a v1.4 -m 'my version 1.4'

# push it to the remote (push all the tags)
$ git push --tags
```

## list tags

```bash
# list tags
$ git tag
```

## delete a tag

```bash
# delete a tag locally
git tag -d 0.0.1

# sync the remote origin
git push origin :refs/tags/0.0.1
```

## find the last tag behind the commit

```bash
$ git describe 08d029b
# will output something like this :
> 0.1.4-83-g08d029b
# which means that the tag 08d029b is 83 commits after the last tag named 0.1.4
```

## find the last tag containing the commit

```bash
$ git describe --contains 08d029b
# will output something like this :
> 0.2.0~2
# which means that the commit 08d029b is contained in the tag named 0.2.0 and it is 2 commits before the tag in the tree
```
