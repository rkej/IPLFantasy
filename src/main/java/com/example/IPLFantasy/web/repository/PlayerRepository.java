package com.example.IPLFantasy.web.repository;

import com.example.IPLFantasy.web.dto.PlayersDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@EnableJpaRepositories(basePackages = "com.example.IPLFantasy.web.repository")
@Repository
@Transactional
public interface PlayerRepository extends JpaRepository<PlayersDto, Integer> {
    @Query(value = "select * from iqhyiotttzde4o5l.players_dto where team = :team", nativeQuery = true)
    List<PlayersDto> findByTeam(@Param("team") String team);

    @Query(value =  "select * from iqhyiotttzde4o5l.players_dto where id = :Id", nativeQuery = true)
    PlayersDto findId(@Param("Id") Integer Id);

    @Modifying
    @Query(value = "delete from iqhyiotttzde4o5l.players_dto where id = :Id", nativeQuery = true)
    void deletePlayer(@Param("Id") Integer Id);

    @Modifying
    @Query(value = "insert into iqhyiotttzde4o5l.players_dto (id, name, notes, type, team) VALUES (:Id, :Name, :Notes, :type, :team)", nativeQuery = true)
    void insertPlayer(@Param("Id") Integer Id, @Param("Name") String Name, @Param("Notes") String Notes, @Param("type") String type, @Param("team") String team);
}
