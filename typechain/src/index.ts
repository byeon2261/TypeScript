// 사용할 경우 tsconfig.json에 esModuleInterop:true 추가
import crypto from "crypto";
// import * as cryto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  // 블럭의 위치
  height: number;
  data: string;
}

class Block implements BlockShape {
  //   public hash: string; // readonly를 사용하지 않을 경우 하단에 push공격에 데이터가 변경된다.
  public readonly hash: string;
  constructor(
    // public prevHash: string,
    public readonly prevHash: string,
    // public height: number,
    public readonly height: number,
    // public data: string
    public readonly data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(preHash: string, height: number, data: string) {
    const hash = `${preHash}${height}${data}`;
    return crypto.createHash("sha256").update(hash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    // return this.blocks; // 이방식으로 할경우 아래의 push해킹에 공격당한다.
    // getBlock(): readonly Block[] 방식도 가능하다.
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("first chain");
blockchain.addBlock("second chain");
blockchain.addBlock("third chain");

blockchain.getBlocks().push(new Block("xxxxxx", 11111, "HACKEDDDDD"));

// blocks가 readonly이기때문에 해당 push는 에러가 발생되며 실행되지 않는다.
// blockchain.getBlocks()[blockchain.getBlocks().length - 1].data = "hell 12312312312";

console.log(blockchain.getBlocks());
