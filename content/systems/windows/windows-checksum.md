# check hash on windows

[Is there built in checksum for win 10? answers.microsoft.com](https://answers.microsoft.com/en-us/insider/forum/insider_wintp-insider_update/is-there-built-in-checksum-for-win-10/8dba82be-f036-4460-b427-954e057b678a)

> CMD as admin
>
> CertUtility can be used to verify md2,3,4,5    SHA1,256,384,512
>
> Example `C:\Windows\system32>CertUtil -hashfile C:\Users\other\Downloads\Zorin9\zorin-os-9.1-core-64.iso MD5`
>

Testé, fonctionne bien.
