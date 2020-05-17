(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{535:function(e,s,t){"use strict";t.r(s);var a=t(33),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"git-rebase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[e._v("#")]),e._v(" Git - rebase")]),e._v(" "),t("h2",{attrs:{id:"doc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doc"}},[e._v("#")]),e._v(" doc")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://git-scm.com/book/ch3-6.html#The-Perils-of-Rebasing",target:"_blank",rel:"noopener noreferrer"}},[e._v("offical doc"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"usefull-commands-rebase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usefull-commands-rebase"}},[e._v("#")]),e._v(" usefull commands rebase")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# cancel a rebase")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase --abort\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"article-rebase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#article-rebase"}},[e._v("#")]),e._v(" Article rebase")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("squashing commits with rebase"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("The rebase command has some awesome options available in its "),t("code",[e._v("--interactive")]),e._v(" (or "),t("code",[e._v("-i")]),e._v(") mode, and one of\nthe most widely used is the ability to squash commits. What this does is take smaller commits and\ncombine them into larger ones, which could be useful if you’re wrapping up the day’s work or if you\njust want to package your changes differently. We’re going to go over how you can do this easily.")]),e._v(" "),t("p",[e._v("A word of caution: "),t("strong",[e._v("Only do this on commits that haven’t been pushed an external repository")]),e._v(". If others\nhave based work off of the commits that you’re going to delete, plenty of conflicts can occur.\n"),t("strong",[e._v("Just don’t rewrite your history if it’s been shared with others")]),e._v(".")]),e._v(" "),t("p",[e._v("So let’s say you’ve just made a few small commits, and you want to make one larger commit out of them.\nOur repository’s history currently looks like this:")]),e._v(" "),t("p",[e._v("The last 4 commits would be much happier if they were wrapped up together, so let’s do just that through\ninteractive rebasing:")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase -i HEAD~4\n\npick 01d1124 Adding license\npick 6340aaa Moving license into its own "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v("\npick ebfd367 Jekyll has become self-aware.\npick 30e0ccb Changed the tagline "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the binary, too.\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Rebase 60709da..30e0ccb onto 60709da")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Commands:")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  p, pick = use commit")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  e, edit = use commit, but stop for amending")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  s, squash = use commit, but meld into previous commit")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If you remove a line here THAT COMMIT WILL BE LOST.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# However, if you remove everything, the rebase will be aborted.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br")])]),t("p",[e._v("So, a few things have happened here. First of all, I told Git that I wanted to rebase using the\nlast four commits from where the "),t("code",[e._v("HEAD")]),e._v(" is with "),t("code",[e._v("HEAD~4")]),e._v(". Git has now put me into an editor with\nthe above text in it, and a little explanation of what can be done. You have plenty of options\navailable to you from this screen, but right now we’re just going to squash everything into one commit.\nSo, changing the first four lines of the file to this will do the trick:")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pick 01d1124 Adding license\nsquash 6340aaa Moving license into its own file\nsquash ebfd367 Jekyll has become self-aware.\nsquash 30e0ccb Changed the tagline in the binary, too.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("Basically this tells Git to combine all four commits into the the first commit in the list.\nOnce this is done and saved, another editor pops up with the following:")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# This is a combination of 4 commits.\n# The first commit's message is:\nAdding license\n\n# This is the 2nd commit message:\n\nMoving license into its own file\n\n# This is the 3rd commit message:\n\nJekyll has become self-aware.\n\n# This is the 4th commit message:\n\nChanged the tagline in the binary, too.\n\n# Please enter the commit message for your changes. Lines starting\n# with '#' will be ignored, and an empty message aborts the commit.\n# Explicit paths specified without -i nor -o; assuming --only paths...\n# Not currently on any branch.\n# Changes to be committed:\n#   (use \"git reset HEAD <file>...\" to unstage)\n#\n#   new file:   LICENSE\n#   modified:   README.textile\n#   modified:   Rakefile\n#   modified:   bin/jekyll\n#\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br")])]),t("p",[e._v("Since we’re combining so many commits, Git allows you to modify the new commit’s message\nbased on the rest of the commits involved in the process. Edit the message as you see fit,\nthen save and quit. Once that’s done, your commits have been successfully squashed!")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Created commit 0fc4eea: Creating license file, and making jekyll self-aware.\n 4 files changed, 27 insertions(+), 30 deletions(-)\n  create mode 100644 LICENSE\n    Successfully rebased and updated refs/heads/master.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("And if we look at the history again…")]),e._v(" "),t("p",[e._v("So, this has been a relatively painless so far. If you run into conflicts during the rebase,\nthey’re usually quite easy to resolve and Git leads you through as much as possible.\nThe basics of this is fix the conflict in question, Git add the file, and then "),t("code",[e._v("git rebase --continue")]),e._v("\nwill resume the process. Of course, doing a "),t("code",[e._v("git rebase --abort")]),e._v(" will bring you back to your previous state\nif you want. If for some reason you’ve lost a commit in the rebase, you can use the reflog to get it back.\n"),t("a",{attrs:{href:"http://gitready.com/intermediate/2009/02/09/reflog-your-safety-net.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("reflog tutorial"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("There’s plenty of other uses for "),t("code",[e._v("git rebase -i")]),e._v(" that haven’t been covered yet.\nIf you have one you’d like to share, please do so! GitCasts also has a fantastic video on this process\nas a whole that also covers some more complex examples of the command.\n"),t("a",{attrs:{href:"http://gitcasts.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gitcasts"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"http://gitcasts.com/posts/rebasing",target:"_blank",rel:"noopener noreferrer"}},[e._v("videos"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"rebase-for-renaming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rebase-for-renaming"}},[e._v("#")]),e._v(" rebase for renaming")]),e._v(" "),t("p",[e._v("Exemple, rebasing 2 lasts commits to rename commit message. Theses commits contains a "),t("code",[e._v("#")]),e._v(" for GitHub/GitLab issue linking.")]),e._v(" "),t("p",[t("code",[e._v("git rebase -i HEAD~2")])]),e._v(" "),t("p",[e._v("then use "),t("code",[e._v("edit")]),e._v(" (and not "),t("code",[e._v("reword")]),e._v(") command.")]),e._v(" "),t("p",[e._v("The rebase will stop at each commit. You will be able to use :")]),e._v(" "),t("p",[t("code",[e._v('git commit --amend -m "#<issue_number> <your_commit_message>"')])]),e._v(" "),t("p",[e._v("then the classical")]),e._v(" "),t("p",[t("code",[e._v("git rebase --continue")])]),e._v(" "),t("h2",{attrs:{id:"rebase-to-split-a-commit-into-several-commits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rebase-to-split-a-commit-into-several-commits"}},[e._v("#")]),e._v(" rebase to split a commit into several commits")]),e._v(" "),t("p",[e._v("from "),t("a",{attrs:{href:"https://emmanuelbernard.com/blog/2014/04/14/split-a-commit-in-two-with-git/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Emmanuel Bernard blog - Split a commit in two with Git - 20140414"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("L'idée est donc de créer un ou plusieurs commits pendant l'édition du commit à split lors du rebase intéractif. En bout de ligne cela donne le commit initial dont on sort les éléments que l'on veut mettre dans un nouveau commit. Le commit initial est recréé en premier et le résultat du split est créé ensuite.")]),e._v(" "),t("p",[t("code",[e._v("git rebase -i <oldsha1>")]),e._v(" ou "),t("code",[e._v("git rebase -i HEAD~3")]),e._v(" pour agir sur un ou plusieurs des 3 derniers commits.")]),e._v(" "),t("p",[e._v("Lors du rebase intéractif, marquer le commit à split à "),t("code",[e._v("edit")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("git reset HEAD^")]),e._v(" a pour effet de sortir toutes les modifications du commit de l'index.")]),e._v(" "),t("p",[e._v("On peut aussi utiliser "),t("code",[e._v("git reset --soft HEAD^")]),e._v(", les modifications restent alors indexées, et il est alors possible de ne sortir de l'index que les fichiers voulus via "),t("code",[e._v("git reset HEAD <file>")])]),e._v(" "),t("p",[e._v("Reste ensuite à créer les nouveaux commits.")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"First part"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Second part"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase --continue\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);