# java security links

## Password Based Encryption support

Specifications :
Defined in RFC 2898 from RSA Labs (PKCS#5)
http://www.ietf.org/rfc/rfc2898.txt

See this example :
http://stackoverflow.com/questions/992019/java-256-bit-aes-password-based-encryption

Password security management :
NEVER save a clear password anyware. We save the password hash salted via PBE mechanism.
Cf this thread by an expert : http://www.developpez.net/forums/d925885/java/general-java/apis/securite/utiliser-lalgorithme-pbe-aes-sha/
PBE explanation : http://en.wikipedia.org/wiki/PBKDF2
Oracle Doc : http://docs.oracle.com/javase/6/docs/technotes/guides/security/crypto/CryptoSpec.html#PBEEx
Good practices :
- http://www.unidevtech.com/index.php/2011/08/password-storage-best-practices/
- http://hitachi-id.com/password-manager/docs/password-management-best-practices.html

## Message digest (Hash) support

Check this : http://docs.oracle.com/javase/6/docs/technotes/guides/security/crypto/CryptoSpec.html#MessageDigest


## JRE config on deployment

Don't forget that key length usage is restricted by default on EVERY JDK by default
http://www.oracle.com/technetwork/java/javase/downloads/jce-6-download-429243.html
http://www.bouncycastle.org/wiki/display/JA1/Frequently+Asked+Questions

http://stackoverflow.com/questions/18142745/how-do-i-generate-a-salt-in-java-for-salted-hash

NIST recommendations : http://csrc.nist.gov/publications/nistpubs/800-132/nist-sp800-132.pdf


