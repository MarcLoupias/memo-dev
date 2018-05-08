# git internals

## ressources

[Entrer dans les entrailles de Git, ou comment faire un commit sans faire du Git (Alexandre Garnier) : Devoxx fr 2016](https://www.youtube.com/watch?v=Hd_UpJPDlik&index=88&list=PLTbQvx84FrAS5clN9i8_LFUQxcMY7qXAO)

> [[4:48](https://youtu.be/Hd_UpJPDlik?list=PLTbQvx84FrAS5clN9i8_LFUQxcMY7qXAO&t=290)]les fichiers objects (de `.git/objects/`) sont compressés avec zlib.

[The anatomy of a Git commit : Christoph Burgdorf - 20141118](https://blog.thoughtram.io/git/2014/11/18/the-anatomy-of-a-git-commit.html)

## objects files

[Types of git objects](https://matthew-brett.github.io/curious-git/git_object_types.html)

[Reading git objects](https://matthew-brett.github.io/curious-git/reading_git_objects.html)

written in `.git/objects/`

list all objects files in `.git/objects/` :

```bash
$ find .git/objects -type f

.git/objects/56/a6051ca2b02b04ef92d5150c9ef600403cb1de
.git/objects/ff/e298c3ce8bb07326f888907996eaa48d266db4
.git/objects/2e/65efe2a145dda7ee51d1741299f848e5bf752e
.git/objects/7b/35c3cb173e25102b0c26600ed2d45361c7a44e
.git/objects/27/4c0052dd5408f8ae2bc8440029ff67d79bc5c3
.git/objects/0e/ed1217a2947f4930583229987d90fe5e8e0b74

```

4 types of objects files :

- commit (the commit description)
- tree (directory state)
- blob (content files state)
- annotated tag

**warning objects files creation**

Theses files are created once the `git add` command is executed. It means you could have a lot of orphans objects (not linked with a `ref`)
if you have added to the `index` a lot of files or directories without putting them into a `commit`.

The command `git prune -n` (or `git fsck --unreachable`) display the list of orphans objects.

The command `git prune -v` delete the orphans objects then print the deleted list.

**immutability**

git `objects` files are **immutable**, once created, git reads them, and that's all. There is no modification ever on it.
They are only deleted when the user execute the `prune` command if they are unreachable from any `refs`.

### lire les fichiers objects

La commande `git cat-file <object-hash> -p` permet d'afficher le contenu d'un fichier object.

Ex commit : 

```bash
$ git cat-file 87a68b76ea470d7ad0f6ecbc5b46eda45e628e43 -p
tree 3852c9e63207a9ca2ccf00a5ba5233661ee6ff00
author Robert DUCHMOUL <robert.duchmoul@domain.tld> 1524570143 +0200
committer Robert DUCHMOUL <robert.duchmoul@domain.tld> 1524570143 +0200

test
```

Ex tree :

```bash
$ git cat-file 3852c9e63207a9ca2ccf00a5ba5233661ee6ff00 -p
100644 blob 274c0052dd5408f8ae2bc8440029ff67d79bc5c3    number.txt
```

Ex blob :

```bash
$ git cat-file 274c0052dd5408f8ae2bc8440029ff67d79bc5c3 -p
1234
```

La même commande en remplaçant `-p` par `-t` pour avoir le type de l'object.

```bash
$ git cat-file 87a68b76ea470d7ad0f6ecbc5b46eda45e628e43 -t
commit

$ git cat-file 3852c9e63207a9ca2ccf00a5ba5233661ee6ff00 -t
tree

$ git cat-file 274c0052dd5408f8ae2bc8440029ff67d79bc5c3 -t
blob
```

### lire le fichier index

```bash
$ git ls-files --stage
100644 274c0052dd5408f8ae2bc8440029ff67d79bc5c3 0       number.txt
```

[What does the git index contain EXACTLY?](https://stackoverflow.com/questions/4084921/what-does-the-git-index-contain-exactly?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)

### files structure

**blob file**

A blob store the content of a file. Structure is header + content.

Header is : the file type (blob), a space, the length value in byte, a null char to terminate.

Ex : `blob 16\u0000`

A blob for a file containing `what is up, doc?` would output this object file content `blob 16\u0000what is up, doc?`.

Then git compute the sha1 for the object file content `bd9dbf5aae1a3862dd1526723246b20206e5fc37`.

Then git compress the content with zlib.

Then git create a new object file in `.git/objects/`. 

The first two sha1 hash chars are the directory (`bd`), the 38 last the object file name (`9dbf5aae1a3862dd1526723246b20206e5fc37`).

**tree file**

Exactly the same as blob, but the content is not a file content but a list of the represented directory :
 
```bash
100644 blob 2e65efe2a145dda7ee51d1741299f848e5bf752e    letter.txt
100644 blob 56a6051ca2b02b04ef92d5150c9ef600403cb1de    number.txt
```

**commit file**

Same but the content is different, it contains the referenced base tree, the author, the committer (could be different), 
a blank line, then the commit message (could be on several lines) :

```bash
tree 83207f0274383b4a79ff6d6c297e95204ba961bc
author Matthew Brett <matthew.brett@gmail.com> 1487004984 +0000
committer Matthew Brett <matthew.brett@gmail.com> 1487004984 +0000

An example commit
```

**index file**

It is a lot more complicated and support structure versions.

Cf [appropriate documentation](https://github.com/git/git/blob/867b1c1bf68363bcfd17667d6d4b9031fa6a1300/Documentation/technical/index-format.txt) in the git repo itself.
