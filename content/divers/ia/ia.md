# IA

## training

[Yann LeCun about IA training on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7133567569684238336/)

```text
Animals and humans get very smart very quickly with vastly smaller amounts of training data than current AI systems.

Current LLMs are trained on text data that would take 20,000 years for a human to read.
And still, they haven't learned that if A is the same as B, then B is the same as A.
Humans get a lot smarter than that with comparatively little training data.
Even corvids, parrots, dogs, and octopuses get smarter than that very, very quickly, with only 2 billion neurons and a few trillion "parameters."

My money is on new architectures that would learn as efficiently as animals and humans.
Using more text data (synthetic or not) is a temporary stopgap made necessary by the limitations of our current approaches.
The salvation is in using sensory data, e.g. video, which has higher bandwidth and more internal structure.

The total amount of visual data seen by a 2 year-old is larger than the amount of data used to train LLMs, but still pretty reasonable.
2 years = 2x365x12x3600 or roughly 32 million seconds.
We have 2 million optical nerve fibers, carrying roughly ten bytes per second each.
That's a total of 6E14 bytes. The volume of data for LLM training is typically 1E13 tokens, which is about 2E13 bytes.
It's a factor of 30.

Importantly, there is more to learn from video than from text because it is more redundant.
It tells you a lot about the structure of the world.
```

TLDR : Next gen IA needs to use video instead of text.

To compare, see [this Jean-Baptiste Kempf (VLC) interview about how video works](https://www.youtube.com/watch?v=Kv4FzAdxclA).

- an image is an array of pixel, each pixel is a color
- a video is a collection of images (something between 24 to 60 images per second)
- CODEC = compression decompression algorithm to send video.
- Video pixel by pixel is around 10 to 40 Gb/s
- the goal of CODEC is to divide 100, 200, ... 1K the bandwith used.
- dividing bandwith is destroying information
- the tech behind is based on how the human eyes behave, some colors are better seen then others, so we can delete some colors without downgrading the image seen.

Each CODEC behave the same way, they delete data not seen by eyes, and they seek data blocks that are redundant image by image or between images.

```text
MPEG-1 (1993) ---> MPEG-2 (1995) = DVD ---> DIVX (1999) (=MPEG-4) ---> H.264 (2003) ---> HEVC (2013) ---> VP9 (2013)
```

- H.264 is the most common CODEC used in the world, around 80% of usage.
- HEVC is crippled by royalties, it remains unused on the web instead of television, around 5%.
- VP9 created by Google, royalty free, opensource, Youtube and Facebook uses it.
- AV1 then AV2 created by the Open Media Alliance initiated by Google.
- AV1 is implemented by [Dav1d](https://github.com/videolan/dav1d), a VLC project, around 210K assembly LoC + 30K C LoC. This impl is widely used by GAFAM.

## misc

[Guide ChatGPT pour développeurs](https://gen-ai.fr/outils/generation-code/chatgpt-pour-developpeurs/)

[vocabulaire : www.frenchweb.fr](https://www.frenchweb.fr/vocabulaire-de-lintelligence-artificielle-12-termes-a-connaitre/307870)

[Aux origines de l'intelligence artificielle - www.franceculture.fr - 20180331](https://www.franceculture.fr/numerique/aux-origines-de-lintelligence-artificielle)

[Machine Learning: The High Interest Credit Card of Technical Debt - 2014](https://ai.google/research/pubs/pub43146)

> Machine learning offers a fantastically powerful toolkit for building complex systems quickly. This paper argues that it is dangerous to think of these quick wins as coming for free. Using the framework of technical debt, we note that it is remarkably easy to incur massive ongoing maintenance costs at the system level when applying machine learning. The goal of this paper is highlight several machine learning specific risk factors and design patterns to be avoided or refactored where possible. These include boundary erosion, entanglement, hidden feedback loops, undeclared consumers, data dependencies, changes in the external world, and a variety of system-level anti-patterns.

Took from [Machine learning and tech debt: A publication from Google on www.funfunforum.com](https://www.funfunforum.com/t/machine-learning-and-tech-debt-a-publication-from-google/5221) :

> Another worry for real-world systems lies in hidden feedback loops. Systems that learn from world behavior are clearly intended to be part of a feedback loop. For example, a system for predicting the click through rate (CTR) of news headlines on a website likely relies on user clicks as training labels, which in turn depend on previous predictions from the model. This leads to issues in analyzing system performance, but these are the obvious kinds of statistical challenges that machine learning researchers may find natural to investigate [2].

[Exponential growth of supercomputing power, 1995-2060 (logarithmic scale)](https://www.futuretimeline.net/21stcentury/images/future-timeline-technology-singularity.jpg)

[Human-level artificial intelligence could be achieved "within five to ten years", say experts - www.futuretimeline.net - 20180925](https://www.futuretimeline.net/blog/2018/09/25.htm)

[Santé : nos données personnelles peuvent-elles sauver des vies ?](https://www.franceculture.fr/emissions/dimanche-et-apres/sante-nos-donnees-personnelles-peuvent-elles-sauver-des-vies)

> 38:20 Les dossiers patients se vendent entre 100 et 150 euros l'unité sur le darkweb (pour feed les IA du domaine médical)

[Éric Sadin : l'asservissement par l'Intelligence Artificielle ? - Thinkerview - 20181108](https://www.youtube.com/watch?v=VzeOnBRzDik)

> objectif du dev de l'IA par les GAFA est de supprimer le libre arbitre par l'analyse des états successifs de l'individu pour lui proposer des choix

["Ce n'est pas possible d'éviter les erreurs de l'IA", affirme Luc Julia - 20231220](https://www.youtube.com/watch?v=3GGEKRS4KMo)

> Eric Julia, co-créateur de SIRI, interview France Inter
