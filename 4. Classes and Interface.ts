//// 4.0 Class
abstract class User {
  constructor(
    public firstName: string,
    private lastName: string,
    // public nickname: string
    protected nickname: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    // console.log(this.lastName) // Error!
    console.log(this.nickname);
  }
}

const gh = new Player("byeon", "gh", "GGaNyueng");
// const gh = new User("byeon","gh","GGaNyueng"); // Error!

gh.getFullName();
gh.getNickName();
gh.firstName;
// gh.lastName // Error!
// gh.nickName // Error!

//// 4.1 Hashmap(dictionary)
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(word: Word) {
    if (this.words[word.term]) {
      delete this.words[word.term];
    }
  }
  update(word: Word) {
    if (this.words[word.term]) {
      this.words[word.term] = word.def;
    }
  }
  showAll() {
    return this.words;
  }
  count() {
    return Object.keys(this.words).length;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

let kimchi = new Word("kimchi", "한국의 음식");
const noodle = new Word("noodle", "맛있엉");
const curry = new Word("curry", "매워");

const dict = new Dict();
dict.add(kimchi);
dict.get("kimchi");

// kimchi = new Word("Kimchi","내 음식"); // Error!
dict.update(new Word("Kimchi", "내 음식"));
dict.add(noodle);
dict.showAll();

//// 4.2 Interface
type GamePlayer = "garen" | "gangflank" | "galeo";
type Health = 1 | 5 | 10;
// interface HealthNum = string // Error!

type User3 = {
  nickname: string;
  name: GamePlayer;
  health: Health;
};
interface Person3 {
  nicknam: string;
  name: GamePlayer;
  health: Health;
}

const player3: User3 = {
  nickname: "가붕이",
  name: "garen",
  // health: 2 // Error!
  health: 1,
};

interface User4 {
  name: string;
}
interface Player4 extends User4 {}

const gh4: Player4 = {
  name: "gh",
};
///// 위 아래가 interface 와 type으로 같게 표현한 코드
// 오브젝트 틀을 표시할때는 interface를 사용하는 것이 더 낫다.
type User5 = {
  name: string;
};
type Player5 = User5 & {};

const gh5: Player5 = {
  name: "gh",
};

interface User6 {
  name: string;
}
interface User6 {
  skill: string;
}
interface User6 {
  health: number;
}
// interface를 여러개 합칠 수 있다.
const gh6: User6 = {
  name: "gh",
  skill: "잠자기",
  health: 0,
};

//// 4.5 Polymorphism
interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
    // delete this.storage // Error!
  }
}

const stringsStorage = new LocalStorage<string>();
stringsStorage.get("xxx");
stringsStorage.set("hello", "How art you?");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get("yn");
booleanStorage.set("no", false);
