# git reflog

[Refs & the reflog](https://www.atlassian.com/git/tutorials/refs-and-the-reflog/the-reflog)

## example usage

```bash
$ git reflog
400e4b7 HEAD@{0}: checkout: moving from master to HEAD~2
0e25143 HEAD@{1}: commit (amend): Integrate some awesome feature into `master`
00f5425 HEAD@{2}: commit (merge): Merge branch ';feature';
ad8621a HEAD@{3}: commit: Finish the feature
```

If one of theses commit is not referenced in a branch or a tag, you can `cherry-pick` it anyway. That's why you can't lost anything with git without destroying things explicitly.
