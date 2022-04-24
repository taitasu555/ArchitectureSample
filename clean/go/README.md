Clean Architecture

内側が外側に依存してはいけない　例えば controller が Framework,Driver に依存してはいけない。
もし依存する場合依存関係の逆転を利用する（Go 言語ではインターフェイスを利用）
