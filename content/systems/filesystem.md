# filesystem

[src - stackoverflow.com](https://stackoverflow.com/a/466596)

## types

### FAT32

[FAT32 - en.wikipedia.org](http://en.wikipedia.org/wiki/File_Allocation_Table#FAT32)

- Maximum number of files: 268,173,300
- Maximum number of files per directory: 2<sup>16</sup> - 1 (65,535)
- Maximum file size: 2 GiB - 1 without [LFS](http://en.wikipedia.org/wiki/Large_file_support), 4 GiB - 1 with

### NTFS

[NTFS - en.wikipedia.org](http://en.wikipedia.org/wiki/NTFS)

- Maximum number of files: 2<sup>32</sup> - 1 (4,294,967,295)
- Maximum file size
  - Implementation: 2<sup>44</sup> - 2<sup>6</sup> bytes (16 TiB - 64 KiB)
  - Theoretical: 2<sup>64</sup> - 2<sup>6</sup> bytes (16 EiB - 64 KiB)
- Maximum volume size
  - Implementation: 2<sup>32</sup> - 1 clusters (256 TiB - 64 KiB)
  - Theoretical: 2<sup>64</sup> - 1 clusters (1 YiB - 64 KiB)

### ext2

[ext2 - en.wikipedia.org](http://en.wikipedia.org/wiki/Ext2)

- Maximum number of files: 10<sup>18</sup>
- Maximum number of files per directory: ~1.3 × 10<sup>20</sup> (performance issues past 10,000)
- Maximum file size
  - 16 GiB (block size of 1 KiB)
  - 256 GiB (block size of 2 KiB)
  - 2 TiB (block size of 4 KiB)
  - 2 TiB (block size of 8 KiB)
- Maximum volume size
  - 4 TiB (block size of 1 KiB)
  - 8 TiB (block size of 2 KiB)
  - 16 TiB (block size of 4 KiB)
  - 32 TiB (block size of 8 KiB)

### ext3

[ext3 - en.wikipedia.org](http://en.wikipedia.org/wiki/Ext3)

- Maximum number of files: min(volumeSize / 2<sup>13</sup>, numberOfBlocks)
- Maximum file size: *same as ext2*
- Maximum volume size: *same as ext2*

### ext4

[ext4 - en.wikipedia.org](http://en.wikipedia.org/wiki/Ext4)

- Maximum number of files: 2<sup>32</sup> - 1 (4,294,967,295)
- Maximum number of files per directory: unlimited
- Maximum file size: 2<sup>44</sup> - 1 bytes (16 TiB - 1)
- Maximum volume size: 2<sup>48</sup> - 1 bytes (256 TiB - 1)
