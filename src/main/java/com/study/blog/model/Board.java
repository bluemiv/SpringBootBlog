package com.study.blog.model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Table(name = "board")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Board {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(nullable = false, length = 100)
  private String title;

  @Lob // 대용량 데이터를 쓸때 사용
  private String content;

  // @ColumnDefault("0")
  private long count; // 조회

  // Board N : 1 User -> 한명의 유저는 여러개의 게시글을 사용할 수 있으므로..
  @ManyToOne(fetch = FetchType.EAGER) // 1개밖에 없으므로, 바로 가지고 옴
  @JoinColumn(name = "userId")
  private User user; // 작성이

  // Board 1 : N Reply -> 1개의 게시물에는 여러개의 답글이 달릴 수 있으므로
  @OneToMany(
      // 데이터가 여러개이므로, 가지고 올 때 같이 가지고 오는게 낫지만 (-> LAZY),
      // 반드시 필요하기 때문에 Eager 전략 사용
      fetch = FetchType.EAGER,
      mappedBy = "board") // FK 가 아님 -> 컬럼을 만들지 말아야 함
  // @JoinColumn(name = "replyId") -> 필요없음. -> 1정규화 원자성에 어긋남
  private List<Reply> reply = new ArrayList<>();

  @CreationTimestamp private LocalDateTime createDate;
}
