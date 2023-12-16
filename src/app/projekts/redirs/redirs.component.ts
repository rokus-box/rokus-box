import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-redirs',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, NgOptimizedImage],
  templateUrl: './redirs.component.html',
  styleUrl: './redirs.component.scss',
})
export class RedirsComponent implements AfterViewInit {
  hljs: any = window['hljs' as any];

  ngAfterViewInit() {
    this.hljs.highlightAll();
  }

  redirsExampleCode = `use std::net::SocketAddr;
use std::str::FromStr;

use redi_rs::RedisPool;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut pool = RedisPool::from_str("localhost:6379").unwrap();
    // Or from SocketAddr
    // let mut pool = RedisPool::from(SocketAddr::from(([127, 0, 0, 1], 6379)));

    pool.max_connections(10).establish_pool().await?;

    pool.send_command("SET foo bar").await?;

    Ok(())
}`;
}
